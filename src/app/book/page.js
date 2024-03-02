import Link from "next/link";

const booksOfTheBible = [
  // Old Testament
  // { id: "genesis", name: "Genesis" },
  // { id: "exodus", name: "Exodus" },
  // { id: "leviticus", name: "Leviticus" },
  // { id: "numbers", name: "Numbers" },
  // { id: "deuteronomy", name: "Deuteronomy" },
  // { id: "joshua", name: "Joshua" },
  // { id: "judges", name: "Judges" },
  // { id: "ruth", name: "Ruth" },
  // { id: "1samuel", name: "1 Samuel" },
  // { id: "2samuel", name: "2 Samuel" },
  // { id: "1kings", name: "1 Kings" },
  // { id: "2kings", name: "2 Kings" },
  // { id: "1chronicles", name: "1 Chronicles" },
  // { id: "2chronicles", name: "2 Chronicles" },
  // { id: "ezra", name: "Ezra" },
  // { id: "nehemiah", name: "Nehemiah" },
  // { id: "esther", name: "Esther" },
  // { id: "job", name: "Job" },
  // { id: "psalms", name: "Psalms" },
  // { id: "proverbs", name: "Proverbs" },
  // { id: "ecclesiastes", name: "Ecclesiastes" },
  // { id: "songofsolomon", name: "Song of Solomon" },
  // { id: "isaiah", name: "Isaiah" },
  // { id: "jeremiah", name: "Jeremiah" },
  // { id: "lamentations", name: "Lamentations" },
  // { id: "ezekiel", name: "Ezekiel" },
  // { id: "daniel", name: "Daniel" },
  // { id: "hosea", name: "Hosea" },
  // { id: "joel", name: "Joel" },
  // { id: "amos", name: "Amos" },
  // { id: "obadiah", name: "Obadiah" },
  // { id: "jonah", name: "Jonah" },
  // { id: "micah", name: "Micah" },
  // { id: "nahum", name: "Nahum" },
  // { id: "habakkuk", name: "Habakkuk" },
  // { id: "zephaniah", name: "Zephaniah" },
  // { id: "haggai", name: "Haggai" },
  // { id: "zechariah", name: "Zechariah" },
  // { id: "malachi", name: "Malachi" },

  // New Testament
  { id: "matthew", name: "MAT" },
  { id: "mark", name: "MAR" },
  { id: "luke", name: "LUK" },
  { id: "john", name: "JHN" },
  { id: "acts", name: "ACT" },
  { id: "romans", name: "ROM" },
  { id: "1corinthians", name: "1 COR" },
  { id: "2corinthians", name: "2 COR" },
  { id: "galatians", name: "GAL" },
  { id: "ephesians", name: "EPH" },
  { id: "philippians", name: "PHI" },
  { id: "colossians", name: "COL" },
  { id: "1thessalonians", name: "1 THS" },
  { id: "2thessalonians", name: "2 THS" },
  { id: "1timothy", name: "1 TIM" },
  { id: "2timothy", name: "2 TIM" },
  { id: "titus", name: "TIT" },
  { id: "philemon", name: "PHN" },
  { id: "hebrews", name: "HEB" },
  { id: "james", name: "JAS" },
  { id: "1peter", name: "1 PET" },
  { id: "2peter", name: "2 PET" },
  { id: "1john", name: "1 JN" },
  { id: "2john", name: "2 JN" },
  { id: "3john", name: "3 JN" },
  { id: "jude", name: "JUD" },
  { id: "revelation", name: "REV" },
];

const BooksPage = () => {
  return (
    <div className="flex flex-col h-screen ">
      {booksOfTheBible.map((book) => (
        <div className=" py-1 pr-3 pl-4 ">
          <Link className="truncate" href={`/book/${book.id}`}>
            {book.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BooksPage;
