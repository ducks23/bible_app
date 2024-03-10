import Link from "next/link";
const booksOfTheBible = [
  // Old Testament
  { id: "genesis", name: "GEN" },
  { id: "exodus", name: "EXO" },
  { id: "leviticus", name: "LEV" },
  { id: "numbers", name: "NUM" },
  { id: "deuteronomy", name: "DEU" },
  { id: "joshua", name: "JOSH" },
  { id: "judges", name: "JDG" },
  { id: "ruth", name: "RUTH" },
  { id: "1samuel", name: "1 SM" },
  { id: "2samuel", name: "2 SM" },
  { id: "1kings", name: "1 KG" },
  { id: "2kings", name: "2 KG" },
  { id: "1chronicles", name: "1 CH" },
  { id: "2chronicles", name: "2 CH" },
  { id: "ezra", name: "EZRA" },
  { id: "nehemiah", name: "NEH" },
  { id: "esther", name: "ESTH" },
  { id: "job", name: "JOB" },
  { id: "psalms", name: "PS" },
  { id: "proverbs", name: "PRO" },
  { id: "ecclesiastes", name: "ECC" },
  { id: "songofsolomon", name: "SONG" },
  { id: "isaiah", name: "ISA" },
  { id: "jeremiah", name: "JER" },
  { id: "lamentations", name: "LAM" },
  { id: "ezekiel", name: "EZEK" },
  { id: "daniel", name: "DAN" },
  { id: "hosea", name: "HOS" },
  { id: "joel", name: "JOEL" },
  { id: "amos", name: "AMOS" },
  { id: "obadiah", name: "OBAD" },
  { id: "jonah", name: "JNH" },
  { id: "micah", name: "MIC" },
  { id: "nahum", name: "NAH" },
  { id: "habakkuk", name: "HAB" },
  { id: "zephaniah", name: "ZEP" },
  { id: "haggai", name: "HAG" },
  { id: "zechariah", name: "ZECH" },
  { id: "malachi", name: "MAL" },

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

export default function RightBar() {
  return (
    <div className="flex pt-10 flex-col h-auto ">
      {booksOfTheBible.map((book, index) => (
        <div key={index} className=" py-1 pl-2 ">
          <Link className="truncate" href={`/book/${book.id}`}>
            <button class="bg-blue-500 hover:bg-blue-400 text-white min-w-16 font-bold py-2 border-blue-700 hover:border-blue-500 rounded">
              {book.name}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
