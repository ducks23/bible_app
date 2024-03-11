import React from "react";
import { BiblePage } from "@/components/Book";

import { fetchBibleData } from "@/utils/api";
import SearchBar from "@/components/SearchBar";

export default async function Home() {
  const bible_name = "john";
  const data = await fetchBibleData("verse", bible_name, 15, 17);
  return (
    <div className="">
      <SearchBar />
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        <div className="text-center">Verse of the Day</div>
      </h2>
      <BiblePage
        chapter_id={bible_name}
        chapter_number={15}
        verse_number={17}
        data={data}
        is_chapter={true}
        is_verse={true}
      />
    </div>
  );
}
