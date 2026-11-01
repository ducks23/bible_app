import { search } from "@/utils/api";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("q")?.trim();
  if (!query) {
    return Response.json({ results: [] });
  }
  const visitorIp = request.headers.get("x-forwarded-for")?.split(",")[0].trim();
  try {
    return Response.json(await search(query, visitorIp));
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Search is unavailable right now." }, { status: 502 });
  }
}
