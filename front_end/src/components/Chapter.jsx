
import { useState } from "react";
import classNames from "classnames";
import { CaretIcon } from "../icons/CaretIcon";


const Chapter = (numbers) => {
  const [open, setOpen] = useState(false);


  const list = [];
  let num = 1;

  for (let i = 0; i < numbers; i++) {
    list.push(num);
    num = num % 10 + 1;
  }

  return (
    <div className="w-full">
      <input
        id="expandCollapse"
        checked={open}
        type="checkbox"
        className="peer sr-only"
      />
      <label
        htmlFor="expandCollapse"
        className={classNames(
          "w-full flex justify-center items-center bg-blue-100",
          "hover:bg-blue-500",
          "transition-colors duration-1000 ease-in-out"
        )}
        onClick={() => setOpen(!open)}
      >
        {open ? "Less information" : "More information"}
        <CaretIcon
          height={20}
          width={20}
          className={classNames("ml-4", {
            "rotate-180": open,
          })}
        />
      </label>
      <div
        className={classNames(
          "overflow-hidden h-0 bg-slate-300",
          "peer-checked:h-[200px] peer-checked:overflow-scroll ",
          "transition-[height] duration-1000 ease-in-out ",
        )}
      >
        <p className="text-black">
          text goes in here
        </p>
      </div>
    </div>
  );
};


export { Chapter };
