"use client";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const booksOfTheBible = [
  // Old Testament
  { id: "Book", name: "Book", chapters: 1 },
  { id: "genesis", name: "Genesis", chapters: 50 },
  { id: "exodus", name: "Exodus", chapters: 40 },
  { id: "leviticus", name: "Leviticus", chapters: 27 },
  { id: "numbers", name: "Numbers", chapters: 36 },
  { id: "deuteronomy", name: "Deuteronomy", chapters: 34 },
  { id: "joshua", name: "Joshua", chapters: 24 },
  { id: "judges", name: "Judges", chapters: 21 },
  { id: "ruth", name: "Ruth", chapters: 4 },
  { id: "1samuel", name: "1 Samuel", chapters: 31 },
  { id: "2samuel", name: "2 Samuel", chapters: 24 },
  { id: "1kings", name: "1 Kings", chapters: 22 },
  { id: "2kings", name: "2 Kings", chapters: 25 },
  { id: "1chronicles", name: "1 Chronicles", chapters: 29 },
  { id: "2chronicles", name: "2 Chronicles", chapters: 36 },
  { id: "ezra", name: "Ezra", chapters: 10 },
  { id: "nehemiah", name: "Nehemiah", chapters: 13 },
  { id: "esther", name: "Esther", chapters: 10 },
  { id: "job", name: "Job", chapters: 42 },
  { id: "psalms", name: "Psalms", chapters: 150 },
  { id: "proverbs", name: "Proverbs", chapters: 31 },
  { id: "ecclesiastes", name: "Ecclesiastes", chapters: 12 },
  { id: "songofsolomon", name: "Song of Solomon", chapters: 8 },
  { id: "isaiah", name: "Isaiah", chapters: 66 },
  { id: "jeremiah", name: "Jeremiah", chapters: 52 },
  { id: "lamentations", name: "Lamentations", chapters: 5 },
  { id: "ezekiel", name: "Ezekiel", chapters: 48 },
  { id: "daniel", name: "Daniel", chapters: 12 },
  { id: "hosea", name: "Hosea", chapters: 14 },
  { id: "joel", name: "Joel", chapters: 3 },
  { id: "amos", name: "Amos", chapters: 9 },
  { id: "obadiah", name: "Obadiah", chapters: 1 },
  { id: "jonah", name: "Jonah", chapters: 4 },
  { id: "micah", name: "Micah", chapters: 7 },
  { id: "nahum", name: "Nahum", chapters: 3 },
  { id: "habakkuk", name: "Habakkuk", chapters: 3 },
  { id: "zephaniah", name: "Zephaniah", chapters: 3 },
  { id: "haggai", name: "Haggai", chapters: 2 },
  { id: "zechariah", name: "Zechariah", chapters: 14 },
  { id: "malachi", name: "Malachi", chapters: 4 },

  // New Testament
  { id: "matthew", name: "Matthew", chapters: 28 },
  { id: "mark", name: "Mark", chapters: 16 },
  { id: "luke", name: "Luke", chapters: 24 },
  { id: "john", name: "John", chapters: 21 },
  { id: "acts", name: "Acts", chapters: 28 },
  { id: "romans", name: "Romans", chapters: 16 },
  { id: "1corinthians", name: "1 Corinthians", chapters: 16 },
  { id: "2corinthians", name: "2 Corinthians", chapters: 13 },
  { id: "galatians", name: "Galatians", chapters: 6 },
  { id: "ephesians", name: "Ephesians", chapters: 6 },
  { id: "philippians", name: "Philippians", chapters: 4 },
  { id: "colossians", name: "Colossians", chapters: 4 },
  { id: "1thessalonians", name: "1 Thessalonians", chapters: 5 },
  { id: "2thessalonians", name: "2 Thessalonians", chapters: 3 },
  { id: "1timothy", name: "1 Timothy", chapters: 6 },
  { id: "2timothy", name: "2 Timothy", chapters: 4 },
  { id: "titus", name: "Titus", chapters: 3 },
  { id: "philemon", name: "Philemon", chapters: 1 },
  { id: "hebrews", name: "Hebrews", chapters: 13 },
  { id: "james", name: "James", chapters: 5 },
  { id: "1peter", name: "1 Peter", chapters: 5 },
  { id: "2peter", name: "2 Peter", chapters: 3 },
  { id: "1john", name: "1 John", chapters: 5 },
  { id: "2john", name: "2 John", chapters: 1 },
  { id: "3john", name: "3 John", chapters: 1 },
  { id: "jude", name: "Jude", chapters: 1 },
  { id: "revelation", name: "Revelation", chapters: 22 },
];
const bibleBooksChapters = {
  genesis: 50,
  exodus: 40,
  leviticus: 27,
  numbers: 36,
  deuteronomy: 34,
  joshua: 24,
  judges: 21,
  ruth: 4,
  "1samuel": 31,
  "2samuel": 24,
  "1kings": 22,
  "2kings": 25,
  "1chronicles": 29,
  "2chronicles": 36,
  ezra: 10,
  nehemiah: 13,
  esther: 10,
  job: 42,
  psalms: 150,
  proverbs: 31,
  ecclesiastes: 12,
  songofsolomon: 8,
  isaiah: 66,
  jeremiah: 52,
  lamentations: 5,
  ezekiel: 48,
  daniel: 12,
  hosea: 14,
  joel: 3,
  amos: 9,
  obadiah: 1,
  jonah: 4,
  micah: 7,
  nahum: 3,
  habakkuk: 3,
  zephaniah: 3,
  haggai: 2,
  zechariah: 14,
  malachi: 4,
  matthew: 28,
  mark: 16,
  luke: 24,
  john: 21,
  acts: 28,
  romans: 16,
  "1corinthians": 16,
  "2corinthians": 13,
  galatians: 6,
  ephesians: 6,
  philippians: 4,
  colossians: 4,
  "1thessalonians": 5,
  "2thessalonians": 3,
  "1timothy": 6,
  "2timothy": 4,
  titus: 3,
  philemon: 1,
  hebrews: 13,
  james: 5,
  "1peter": 5,
  "2peter": 3,
  "1john": 5,
  "2john": 1,
  "3john": 1,
  jude: 1,
  revelation: 22,
};

const BiblePage = ({
  chapter_id,
  data,
  chapter_number,
  is_chapter = false,
}) => {
  const router = useRouter();

  const [value, setValue] = useState("Book");
  const [chapter, setChapter] = useState("Chapter");
  console.log(value);

  let size = bibleBooksChapters[value];
  function generateList(size) {
    let list = ["Chapter"];
    for (let i = 1; i <= size; i++) {
      list.push(i);
    }
    return list;
  }
  let num_chapters = generateList(size);

  const redirectToAnotherPage = () => {
    router.push(`/book/${value}/chapter/${chapter}`);
  };
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
  console.log(value);
  console.log(chapter);

  return (
    <div className="flex justify-center bg-background h-fit flex-col">
      <div className="flex justify-center flex-wrap p-2">
        <div className="p-1">
          <Select
            type="single"
            value={value}
            defaultValue={"Book"}
            onValueChange={(value) => {
              setValue(value);
            }}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue value={value} placeholder="Book" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {booksOfTheBible.map((item, index) => (
                  <SelectItem value={item.id}>{item.name}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="p-1">
          <Select
            type="single"
            value={chapter}
            defaultValue={"Chapter"}
            onValueChange={(value) => {
              setChapter(value);
            }}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Chapter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {num_chapters.map((item, index) => (
                  <SelectItem value={item}>{item}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="p-1">
          <Select>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Verse" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Matthew</SelectItem>
                <SelectItem value="banana">Mark</SelectItem>
                <SelectItem value="blueberry">Luke</SelectItem>
                <SelectItem value="grapes">John</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="p-1">
          <Button variant="secondary" onClick={redirectToAnotherPage}>
            search
          </Button>
        </div>
      </div>
      <div className="h-fit">
        <div className="text-2xl text-center mx-auto">{"Book of " + title}</div>
        {data.data.map((item, index) => (
          <div className=" flex justify-center">
            <div>
              {is_chapter ? (
                <div className="text-xl text-center pt-2 ">
                  {"Chapter "}
                  {chapter_number}
                </div>
              ) : (
                <div className="text-xl  text-center pt-2 ">
                  {"Chapter "}
                  {index + 1}
                </div>
              )}
              <div className=" max-w-xl px-2">
                {item.map((item, index) => (
                  <div className="flex pt-2  text-lg">
                    <div className="pl-4 "> {index + 1 + "."}</div>
                    <div className="pl-1 pr-4 ">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export { BiblePage };
