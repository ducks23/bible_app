import { BiblePage } from "@/components/Book";
import SearchBar from "@/components/SearchBar";
import { fetchBibleData } from "@/utils/api";

export default async function Page({ params: { book_id } }) {
  const data = await fetchBibleData("book", book_id);

  return (
    <div>
      <SearchBar />
      <BiblePage chapter_id={book_id} data={data} />
    </div>
  );
}
