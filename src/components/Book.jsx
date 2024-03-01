"use client";
import { old_testament, new_testament } from "@/helpers/data";
import { Chapter } from "./Chapter";
export default function Book() {
  const ot_list = Object.keys(old_testament);
  const nt_list = Object.keys(new_testament);

  return (
    <div className="p-2 bg-gray-200">
      <Chapter />

      <div className="flex justify-evenly">
        <div>
          {ot_list.map((item) => (
            <div className="p-[2px]">{item}</div>
          ))}
        </div>

        <div>
          {nt_list.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
