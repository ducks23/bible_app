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

import {
  bibleBooksChapters,
  booksOfTheBible,
  verse_counts,
} from "@/helpers/data";
import { fetchBibleData } from "@/utils/api";

import { Button } from "@/components/ui/button";
const BiblePage = ({
  chapter_id,
  data,
  chapter_number,
  verse_number,
  is_chapter = false,
}) => {
  const router = useRouter();
  if (chapter_id == null) {
    chapter_id = "Book";
  }
  if (chapter_number == null) {
    chapter_number = "Chapter";
  }
  if (verse_number == null) {
    verse_number = "Verse";
  }
  const [value, setValue] = useState(chapter_id);
  const [chapter, setChapter] = useState(chapter_number);
  const [verse, setVerse] = useState(verse_number);

  let size = bibleBooksChapters[value];
  function generateList(size) {
    let list = [];
    for (let i = 1; i <= size; i++) {
      list.push(i);
    }
    return list;
  }
  let num_chapters = generateList(size);
  num_chapters.unshift("Chapter");

  const redirectToAnotherPage = () => {
    if (value != "Book" && chapter != "Chapter" && verse != "Verse") {
      router.push(`/book/${value}/chapter/${chapter}/verse/${verse}`);
    }
    if (value != "Book" && chapter != "Chapter" && verse == "Verse") {
      router.push(`/book/${value}/chapter/${chapter}`);
    }
    if (value != "Book" && chapter == "Chapter" && verse == "Verse") {
      router.push(`/book/${value}`);
    }
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

  let verses_list = ["Verse"];
  if (chapter != "Chapter") {
    let verse_nums = verse_counts[value.toString()][chapter.toString()];
    verses_list = generateList(parseInt(verse_nums));
    verses_list.unshift("Verse");
  }

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
            defaultValue={chapter}
            onValueChange={(value) => {
              setChapter(value);
            }}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Chapter"> {chapter} </SelectValue>
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
          <Select
            type="single"
            value={verse}
            defaultValue={verse}
            onValueChange={(value) => {
              setVerse(value);
            }}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Verse">{verse} </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {verses_list.map((item, index) => (
                  <SelectItem value={item}>{item}</SelectItem>
                ))}
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
