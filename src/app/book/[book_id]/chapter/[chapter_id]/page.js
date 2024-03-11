import { fetchBibleData } from "@/utils/api";
import { BiblePage } from "@/components/Book";
import SearchBar from "@/components/SearchBar";

export default async function Page({ params: { book_id, chapter_id } }) {
  const data = await fetchBibleData("chapter", book_id, chapter_id);
  console.log(book_id, "book_id");
  console.log(chapter_id, "chapter_id");
  console.log(data);
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
