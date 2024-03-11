import Link from "next/link";

export default function SearchItem({ item }) {
  console.log(item);
  const title = item._id.split(":");
  const lower = title[0].toLowerCase();

  return (
    <div className="flex p-2 flex-col">
      <div className="bg-secondary rounded-lg">
        <div className="p-3 font-bold">
          <Link href={`/book/${lower}/chapter/${title[1]}/verse/${title[2]}`}>
            {" "}
            {`${title[0]} ${title[1]}:${title[2]}`}
          </Link>
        </div>
        <div className="p-3">{item._source.text}</div>
      </div>
    </div>
  );
}
