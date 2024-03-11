import Link from "next/link";

export default function BibleContent({
  data,
  chapter_id,
  chapter_number,
  verse_number,
  is_chapter,
  is_verse,
}) {
  let title;
  if (!isNaN(parseInt(chapter_id.charAt(0)))) {
    title =
      chapter_id.charAt(0) +
      " " +
      chapter_id.charAt(1).toUpperCase() +
      chapter_id.slice(2);
  } else {
    title = chapter_id.charAt(0).toUpperCase() + chapter_id.slice(1);
  }
  return (
    <div className="flex flex-col h-[70vh] justify-between">
      <div className=" content mb-auto">
        <div className="text-2xl text-center mx-auto">
          <Link href={`/book/${chapter_id}`}>{title}</Link>
        </div>
        {data.data.map((item, index) => (
          <div className=" flex justify-center">
            <div>
              {is_chapter ? (
                <div className="text-xl text-center pt-2 ">
                  <Link href={`/book/${chapter_id}/chapter/${chapter_number}`}>
                    {"Ch. " + chapter_number}
                  </Link>
                </div>
              ) : (
                <div className="text-xl  text-center pt-2 ">
                  <Link href={`/book/${chapter_id}/chapter/${index + 1}`}>
                    {index + 1}
                  </Link>
                </div>
              )}
              <div className=" max-w-xl px-2">
                {item.map((item, index) => (
                  <div className="flex pt-2  text-lg">
                    {is_verse ? (
                      <div className="pl-4 "> {verse_number + "."}</div>
                    ) : (
                      <div className="pl-4 "> {index + 1 + "."}</div>
                    )}

                    <div className="pl-1 pr-4 ">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around bottom-0 p-6">
        {is_verse ? (
          <Link
            className=" my-auto bg-secondary rounded-lg flex items-center justify-center text-center w-full h-10"
            href={`/book/${chapter_id}/chapter/${chapter_number}/verse/${parseInt(verse_number) - 1}`}
          >
            <div className=""> {"<"} </div>
          </Link>
        ) : (
          <Link
            className=" my-auto bg-secondary rounded-lg flex items-center justify-center text-center w-full h-10"
            href={`/book/${chapter_id}/chapter/${parseInt(chapter_number) - 1}`}
          >
            <div className=""> {"<"} </div>
          </Link>
        )}

        <div className="w-40"></div>

        {is_verse ? (
          <Link
            className=" my-auto bg-secondary rounded-lg flex items-center justify-center text-center w-full h-10"
            href={`/book/${chapter_id}/chapter/${chapter_number}/verse/${parseInt(verse_number) + 1}`}
          >
            <div className=""> {">"} </div>
          </Link>
        ) : (
          <Link
            className=" my-auto bg-secondary rounded-lg flex items-center justify-center text-center w-full h-10"
            href={`/book/${chapter_id}/chapter/${parseInt(chapter_number) + 1}`}
          >
            <div className=""> {">"} </div>
          </Link>
        )}
      </div>
    </div>
  );
}
