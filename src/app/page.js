import MainBible from "@/sections/main";
import { BiblePage } from "@/components/Book";

import { fetchBibleData } from "@/utils/api";

export default async function Home() {
  const bible_name = "genesis";
  const data = await fetchBibleData("book", bible_name);
  return (
    <div className="bg-sky-50">
      {" "}
      <BiblePage chapter_id={bible_name} data={data} />
      <MainBible />
    </div>
  );
}
