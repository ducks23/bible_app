import React from "react";
import { BiblePage } from "@/components/Book";

import { fetchBibleData } from "@/utils/api";

export default async function Home() {
  const bible_name = "genesis";
  const data = await fetchBibleData("chapter", bible_name, 1);
  return (
    <div className="">
      <BiblePage chapter_id={bible_name} chapter_number={1} data={data} />
    </div>
  );
}
