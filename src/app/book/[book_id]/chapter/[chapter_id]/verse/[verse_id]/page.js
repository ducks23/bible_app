import { fetchBibleData } from "@/utils/api";
import { BiblePage } from "@/components/Book";
import SearchBar from "@/components/SearchBar";

export default async function Page({
  params: { book_id, chapter_id, verse_id },
}) {
  const data = await fetchBibleData("verse", book_id, chapter_id, verse_id);
  return (
    <div>
      <SearchBar />
      <BiblePage
        chapter_id={book_id}
        chapter_number={chapter_id}
        verse_number={verse_id}
        data={data}
        is_chapter={true}
        is_verse={true}
      />
    </div>
  );
}
