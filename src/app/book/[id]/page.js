import { BiblePage } from "@/components/Book";

async function fetchBibleVerse(book) {
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

export default async function Page({ params: { id } }) {
  const book = await fetchBibleVerse(id);

  const title = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div>
      <BiblePage id={title} book={book} />
    </div>
  );
}
