"use client";
import { useRouter } from "next/navigation";
import { verse_counts, booksOfTheBible } from "@/helpers/data";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

export default function BibleContent({
  data,
  chapter_id,
  chapter_number,
  verse_number,
  is_chapter,
  is_verse,
}) {
  const router = useRouter();
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
  const moveChapterUp = () => {
    const num_of_chapters = Object.keys(verse_counts[chapter_id]).length;
    if (parseInt(num_of_chapters) == parseInt(chapter_number)) {
    } else {
      router.push(
        `/book/${chapter_id}/chapter/${parseInt(chapter_number) + 1}`,
      );
    }
  };
  const moveChapterDown = () => {
    if (1 == parseInt(chapter_number)) {
    } else {
      router.push(
        `/book/${chapter_id}/chapter/${parseInt(chapter_number) - 1}`,
      );
    }
  };

  const moveVerseUp = () => {
    const num_of_verses = verse_counts[chapter_id][chapter_number];

    if (num_of_verses == parseInt(verse_number)) {
    } else {
      router.push(
        `/book/${chapter_id}/chapter/${chapter_number}/verse/${parseInt(verse_number) + 1}`,
      );
    }
  };

  const moveVerseDown = () => {
    if (1 == parseInt(verse_number)) {
    } else {
      router.push(
        `/book/${chapter_id}/chapter/${chapter_number}/verse/${parseInt(verse_number) - 1}`,
      );
    }
  };

  return (
    <m.div className="flex flex-col h-[60vh] justify-between">
      <div className=" content mb-auto">
        <div className="text-2xl text-center mx-auto">
          <Link href={`/book/${chapter_id}`}>{title}</Link>
        </div>
        {data.data.map((item, index) => (
          <div key={index} className=" flex justify-center">
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
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                className=" max-w-xl px-2"
              >
                {item.map((item, index) => (
                  <div key={index} className="flex pt-2  text-lg">
                    {is_verse ? (
                      <div className="pl-4 "> {verse_number + "."}</div>
                    ) : (
                      <div className="pl-4 "> {index + 1 + "."}</div>
                    )}

                    <div className="pl-1 pr-4 ">{item}</div>
                  </div>
                ))}
              </m.div>
            </div>
          </div>
        ))}
      </div>
      <div className=" mx-auto max-w-xl text-center justify-center  bottom-0 p-6">
        <div className="flex">
          {is_verse ? (
            <Button
              onClick={moveVerseDown}
              className=" my-auto bg-secondary rounded-lg flex items-center justify-center text-center w-full h-10"
            >
              <div className=""> {"<"} </div>
            </Button>
          ) : (
            <Button
              onClick={moveChapterDown}
              className=" my-auto bg-secondary rounded-lg flex items-center justify-center text-center w-full h-10"
            >
              <div className=""> {"<"} </div>
            </Button>
          )}

          <div className="w-40"></div>

          {is_verse ? (
            <Button
              onClick={moveVerseUp}
              className=" my-auto bg-secondary rounded-lg flex items-center justify-center text-center w-full h-10"
            >
              <div className=""> {">"} </div>
            </Button>
          ) : (
            <Button
              onClick={moveChapterUp}
              className=" my-auto bg-secondary rounded-lg flex items-center justify-center text-center w-full h-10"
            >
              <div className=""> {">"} </div>
            </Button>
          )}
        </div>
      </div>
    </m.div>
  );
}
