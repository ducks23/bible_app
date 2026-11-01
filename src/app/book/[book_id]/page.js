import { BiblePage } from "@/components/Book";
import SearchBar from "@/components/SearchBar";
import { getBook } from "@/utils/api";

export default async function Page({ params }) {
  const { book_id } = await params;
  const data = await getBook(book_id);

  return (
    <div>
      <SearchBar />
      <BiblePage chapter_id={book_id} data={data} />
    </div>
  );
}
