"use client";
import Explore from "./Explore";
import BibleContent from "./BibleContent";
const BiblePage = ({
  chapter_id,
  data,
  chapter_number,
  verse_number,
  is_chapter = false,
  is_verse = false,
}) => {
  return (
    <div className="flex justify-center bg-background h-fit flex-col">
      <Explore
        chapter_id={chapter_id}
        chapter_number={chapter_number}
        verse_number={verse_number}
        is_verse={is_verse}
        is_chapter={is_chapter}
        data={data}
      />
      <BibleContent
        chapter_id={chapter_id}
        chapter_number={chapter_number}
        verse_number={verse_number}
        is_verse={is_verse}
        is_chapter={is_chapter}
        data={data}
      />
    </div>
  );
};
export { BiblePage };
