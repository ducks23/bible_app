import Link from "next/link";

export default function SearchItem({ item }) {
  const { verse, reason } = item;
  const bookId = verse.book.slug.replaceAll("-", "");

  return (
    <div className="flex p-2 flex-col">
      <div className="bg-secondary rounded-lg">
        <div className="p-3 font-bold">
          <Link href={`/book/${bookId}/chapter/${verse.chapter}/verse/${verse.verse}`}>
            {verse.reference}
          </Link>
        </div>
        <div className="p-3">{verse.text}</div>
        {reason && <div className="px-3 pb-3 text-sm opacity-70">{reason}</div>}
      </div>
    </div>
  );
}
