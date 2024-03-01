"use client";
import { SparklesCore } from "@/components/ui/sparkles";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function Page() {
  const words =
    "Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it. But small is the gate and narrow the road that leads to life, and only a few find it.";

  return (
    <div className="min-h-svh text-9xl w-full bg-rose-800 flex flex-col items-center justify-center overflow-hidden ">
      <div className="font-bold mb-7 text-center text-yellow-300 ">
        Holy Bible
      </div>
      <div className="text-yellow-300 text-2xl w-[40rem] text-center mb-7">
        <TextGenerateEffect words={words} />
      </div>
      {/* Gradients */}
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-rose-800 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
