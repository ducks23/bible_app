// Client for bible-api, which replaced the old django-bible and elastic-lambda services.
// Server-only: pages and route handlers call the API, so the browser never needs to reach it.

const BASE = (process.env.BIBLE_API_URL ?? "http://localhost:8010/api/v1").replace(/\/$/, "");
const TRANSLATION = process.env.BIBLE_TRANSLATION ?? "kjv";
const DAY = 60 * 60 * 24;
const CHAPTERS_PER_REQUEST = 40; // the API caps one passage request at 2000 verses

// This app's book ids ("1samuel", "songofsolomon") are the API's slugs without hyphens.
const toSlug = (bookId) =>
  bookId === "songofsolomon" ? "song-of-solomon" : bookId.replace(/^(\d)/, "$1-");
export const toBookId = (slug) => slug.replaceAll("-", "");

async function get(path) {
  const url = `${BASE}${path}${path.includes("?") ? "&" : "?"}translation=${TRANSLATION}`;
  const response = await fetch(url, { next: { revalidate: DAY } });
  if (!response.ok) {
    throw new Error(`Bible API returned ${response.status} for ${path}`);
  }
  return response.json();
}

// The components render `{ data: [[...chapter one verses], [...chapter two verses]] }`.
export async function getBook(bookId) {
  const book = await get(`/books/${toSlug(bookId)}/`);
  const requests = [];
  for (let first = 1; first <= book.chapter_count; first += CHAPTERS_PER_REQUEST) {
    const last = Math.min(first + CHAPTERS_PER_REQUEST - 1, book.chapter_count);
    const ref = encodeURIComponent(`${book.name} ${first}-${last}`);
    requests.push(get(`/passages/?ref=${ref}`));
  }

  const chapters = new Map();
  for (const { passages } of await Promise.all(requests)) {
    for (const verse of passages.flatMap((passage) => passage.verses)) {
      chapters.set(verse.chapter, [...(chapters.get(verse.chapter) ?? []), verse.text]);
    }
  }
  return { data: [...chapters.keys()].sort((a, b) => a - b).map((n) => chapters.get(n)) };
}

export async function getChapter(bookId, chapter) {
  const { verses } = await get(`/books/${toSlug(bookId)}/chapters/${chapter}/`);
  return { data: [verses.map((verse) => verse.text)] };
}

export async function getVerse(bookId, chapter, verse) {
  const { text } = await get(`/books/${toSlug(bookId)}/chapters/${chapter}/verses/${verse}/`);
  return { data: [[text]] };
}

export async function search(query, visitorIp) {
  const params = new URLSearchParams({ q: query, translation: TRANSLATION, rerank: "true", limit: "20" });
  const response = await fetch(`${BASE}/search/?${params}`, {
    cache: "no-store",
    headers: visitorIp ? { "x-forwarded-for": visitorIp } : {},
  });
  if (!response.ok) {
    throw new Error(`Bible API returned ${response.status} for search`);
  }
  return response.json();
}
