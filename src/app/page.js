import { BiblePage } from "@/components/Book";
import { getVerse } from "@/utils/api";
import SearchBar from "@/components/SearchBar";

// Rendered per request so building the image does not need a running API.
export const dynamic = "force-dynamic";

export default async function Home() {
  const book = "john";
  const data = await getVerse(book, 15, 17);
  return (
    <div className="">
      <SearchBar />
      <BiblePage
        chapter_id={book}
        chapter_number={15}
        verse_number={17}
        data={data}
        is_chapter={true}
        is_verse={true}
      />
    </div>
  );
}
