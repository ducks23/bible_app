"use client";
import Dictionary from "@/components/Dictionary";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Page() {
  return (
    <div className="min-h-svh text-9xl w-full bg-rose-800 flex flex-col items-center justify-center overflow-hidden ">
      <div className="font-bold mb-7 text-center text-yellow-300 ">
        Holy Bible
      </div>
      <Dictionary />
    </div>
  );
}
