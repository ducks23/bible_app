import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import BooksPage from "./book/page";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export default function Home() {
  const words = "Holy Bible";

  return (
    <div className=" bg-blue-300 ">
      <div className=""></div>
      {/* <GlowingStarsBackgroundCard /> */}
      <div className="font-body font-bold text-xl  text-center p-5 ">
        <TextGenerateEffect
          className=" text-black text-4xl font-body"
          words={words}
        />
      </div>
      <BooksPage />

      <div className="flex justify-center items-center">
        {/* <TextRevealCard */}
        {/*   text="If you really know me, you will know my Father as well" */}
        {/*   revealText="From now on, you do know him and have seen him." */}
        {/* > */}
        {/* <TextRevealCardTitle> */}
        {/*   Truly my soul finds rest in God; my salvation comes from him. */}
        {/* </TextRevealCardTitle> */}
        {/* <TextRevealCardDescription>ye shall find</TextRevealCardDescription> */}
        {/* </TextRevealCard> */}
      </div>
      {/* <Book /> */}
    </div>
  );
}
