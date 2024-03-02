import MainBible from "@/sections/main";
import { BiblePage } from "@/components/Book";

async function fetchBibleBook(book) {
  const baseUrl = "https://django-bible.vercel.app/book";
  const data = {
    book_name: book,
    password: "2UuW4Mi8.bG2BGKpbAzXRr",
  };
  const jsonData = JSON.stringify(data);

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      // next: {
      //   revalidate: 10,
      // },
      body: jsonData, // Attach the serialized data
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrowing the error for the caller to handle
  }
}
export default async function Home() {
  const data = await fetchBibleBook("Genesis");
  console.log(data);
  return (
    <div className="bg-sky-50">
      {" "}
      <BiblePage chapter_id={"3john"} data={data} />
      <MainBible />
    </div>
  );
}
