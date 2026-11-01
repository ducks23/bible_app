import { getChapter } from "@/utils/api";
import { BiblePage } from "@/components/Book";
import SearchBar from "@/components/SearchBar";

export default async function Page({ params }) {
  const { book_id, chapter_id } = await params;
  const data = await getChapter(book_id, chapter_id);
  return (
    <div>
      <SearchBar />
      <BiblePage
        chapter_id={book_id}
        chapter_number={chapter_id}
        data={data}
        is_chapter={true}
      />
    </div>
  );
}
