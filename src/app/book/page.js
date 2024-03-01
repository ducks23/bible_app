import Link from "next/link";

const booksOfTheBible = [
  // Old Testament
  { id: "genesis", name: "Genesis" },
  { id: "exodus", name: "Exodus" },
  { id: "leviticus", name: "Leviticus" },
  { id: "numbers", name: "Numbers" },
  { id: "deuteronomy", name: "Deuteronomy" },
  { id: "joshua", name: "Joshua" },
  { id: "judges", name: "Judges" },
  { id: "ruth", name: "Ruth" },
  { id: "1samuel", name: "1 Samuel" },
  { id: "2samuel", name: "2 Samuel" },
  { id: "1kings", name: "1 Kings" },
  { id: "2kings", name: "2 Kings" },
  { id: "1chronicles", name: "1 Chronicles" },
  { id: "2chronicles", name: "2 Chronicles" },
  { id: "ezra", name: "Ezra" },
  { id: "nehemiah", name: "Nehemiah" },
  { id: "esther", name: "Esther" },
  { id: "job", name: "Job" },
  { id: "psalms", name: "Psalms" },
  { id: "proverbs", name: "Proverbs" },
  { id: "ecclesiastes", name: "Ecclesiastes" },
  { id: "songofsolomon", name: "Song of Solomon" },
  { id: "isaiah", name: "Isaiah" },
  { id: "jeremiah", name: "Jeremiah" },
  { id: "lamentations", name: "Lamentations" },
  { id: "ezekiel", name: "Ezekiel" },
  { id: "daniel", name: "Daniel" },
  { id: "hosea", name: "Hosea" },
  { id: "joel", name: "Joel" },
  { id: "amos", name: "Amos" },
  { id: "obadiah", name: "Obadiah" },
  { id: "jonah", name: "Jonah" },
  { id: "micah", name: "Micah" },
  { id: "nahum", name: "Nahum" },
  { id: "habakkuk", name: "Habakkuk" },
  { id: "zephaniah", name: "Zephaniah" },
  { id: "haggai", name: "Haggai" },
  { id: "zechariah", name: "Zechariah" },
  { id: "malachi", name: "Malachi" },

  // New Testament
  { id: "matthew", name: "Matthew" },
  { id: "mark", name: "Mark" },
  { id: "luke", name: "Luke" },
  { id: "john", name: "John" },
  { id: "acts", name: "Acts" },
  { id: "romans", name: "Romans" },
  { id: "1corinthians", name: "1 Corinthians" },
  { id: "2corinthians", name: "2 Corinthians" },
  { id: "galatians", name: "Galatians" },
  { id: "ephesians", name: "Ephesians" },
  { id: "philippians", name: "Philippians" },
  { id: "colossians", name: "Colossians" },
  { id: "1thessalonians", name: "1 Thessalonians" },
  { id: "2thessalonians", name: "2 Thessalonians" },
  { id: "1timothy", name: "1 Timothy" },
  { id: "2timothy", name: "2 Timothy" },
  { id: "titus", name: "Titus" },
  { id: "philemon", name: "Philemon" },
  { id: "hebrews", name: "Hebrews" },
  { id: "james", name: "James" },
  { id: "1peter", name: "1 Peter" },
  { id: "2peter", name: "2 Peter" },
  { id: "1john", name: "1 John" },
  { id: "2john", name: "2 John" },
  { id: "3john", name: "3 John" },
  { id: "jude", name: "Jude" },
  { id: "revelation", name: "Revelation" },
];

const BooksPage = () => {
  return (
    <div>
      <h1>Books of the Bible</h1>
      <ul>
        {booksOfTheBible.map((book) => (
          <li key={book.id}>
            <Link href={`/book/${book.id}`}>{book.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
