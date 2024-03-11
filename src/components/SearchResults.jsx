import SearchItem from "./SearchItem";

export default function SearchResults({ data }) {
  return (
    <div className="max-w-[40rem] px-3 pt-5 mx-auto">
      {data.map((item, index) => (
        <SearchItem item={item} />
      ))}
    </div>
  );
}
