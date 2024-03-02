const BiblePage = ({
  chapter_id,
  data,
  chapter_number,
  is_chapter = false,
}) => {
  let title;
  if (!isNaN(parseInt(chapter_id.charAt(0)))) {
    title =
      chapter_id.charAt(0) +
      " " +
      chapter_id.charAt(1).toUpperCase() +
      chapter_id.slice(2);
  } else {
    title = chapter_id.charAt(0).toUpperCase() + chapter_id.slice(1);
  }

  console.log(title, "title");
  return (
    <div className="flex justify-center bg-sky-50 h-fit  flex-col">
      <div className="  p-1 h-fit">
        <div className="text-3xl text-center  font-bold text-red-700  underline mx-auto">
          {"Book of " + title}
        </div>
        {data.data.map((item, index) => (
          <div className="">
            {is_chapter ? (
              <div className="text-xl  text-center font-bold pt-3 text-indigo-700">
                {"Chapter "}
                {chapter_number}
              </div>
            ) : (
              <div className="text-xl  text-center font-bold pt-3 text-indigo-700">
                {"Chapter "}
                {index + 1}
              </div>
            )}
            <div className=" pl-2">
              {item.map((item, index) => (
                <div className="flex text-gray-600 pt-2 text-lg">
                  <div className="pl-4"> {index + 1}</div>
                  <div className="pl-1">{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export { BiblePage };
