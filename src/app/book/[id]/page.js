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
  const data = await fetchBibleVerse(id);
  console.log(data);
  return (
    <div className="p-4">
      <div className="text-center text-5xl p-2 pb-4">{id}</div>
      {data.verses.map((item, index) => (
        <div className="flex m-auto max-w-[35rem]">
          <span className="">{index + 1}</span>
          <span className="px-1 ">{item}</span>
        </div>
      ))}
    </div>
  );
}
