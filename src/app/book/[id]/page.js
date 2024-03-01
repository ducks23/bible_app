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
    console.log("here");
    console.log(data);
    console.log("here2");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrowing the error for the caller to handle
  }
}

export default async function Page({ params: { id } }) {
  const book = await fetchBibleVerse(id);

  const title = id.charAt(0).toUpperCase() + id.slice(1);

  console.log(book.data);
  return (
    <div className="flex justify-center pt-6 flex-col">
      <div className="text-3xl mx-auto">{"Book of " + title}</div>
      <div className="">
        {book.data.map((item, index) => (
          <div className="">
            <div className="text-xl pt-3 text-center">
              {"Chapter "}
              {index + 1}
            </div>
            <div className="">
              {item.map((item, index) => (
                <div className="flex pt-2 px-12">
                  <div className=""> {index + 1}</div>
                  <div className="pl-1">{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
