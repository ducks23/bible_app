"use client";
import Dictionary from "@/components/Dictionary";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Page() {
  return (
    <div className="min-h-svh  w-full flex flex-col items-center pt-20 overflow-hidden ">
      <div className="font-bold mb-7 text-center ">Search Definition</div>
      <Dictionary />
    </div>
  );
}
