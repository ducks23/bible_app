import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Book from "@/components/Book";
export default function Home() {
  const words = "Holy Bible";
  return (
    <div className="p-3">
      <div className=""></div>
      {/* <GlowingStarsBackgroundCard /> */}
      <div className="font-body font-bold text-xl text-center p-5 ">
        <TextGenerateEffect className=" text-black font-body" words={words} />
      </div>
      {/* <Book /> */}
    </div>
  );
}
