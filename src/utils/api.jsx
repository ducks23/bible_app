export async function fetchBibleData(
  url,
  book,
  chapter_number = "",
  verse_number = "",
) {
  console.log(url, "url");
  const baseUrl = `https://django-bible.vercel.app/${url}`;
  const data = {
    book_name: book,
    chapter_number: chapter_number,
    verse_number: verse_number,
    password: "2UuW4Mi8.bG2BGKpbAzXRr",
  };
  const jsonData = JSON.stringify(data);

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      next: {
        revalidate: 10,
      },
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
