const BiblePage = ({ id, book }) => {
  const title = id.charAt(0).toUpperCase() + id.slice(1);
  return (
    <div className="flex justify-center bg-sky-50 h-fit  flex-col">
      <div className="  p-1 h-fit">
        <div className="text-3xl text-center  font-bold text-gray-500  underline mx-auto">
          {"Book of " + title}
        </div>
        {book.data.map((item, index) => (
          <div className="">
            <div className="text-xl  text-center font-bold text-indigo-700">
              {"Chapter "}
              {index + 1}
            </div>
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
