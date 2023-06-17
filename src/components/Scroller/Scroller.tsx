import React from "react";
import Image from "next/image";
import gradientPng from "@/components/Scroller/gradient.png";

const SCROLL_PHRASES = [
  "WE ARE ON A MISSION",
  "KEEP MOVING FORWARD",
  "EMBRACE THE CHALLENGE",
  "UNLEASH YOUR POTENTIAL",
  "DREAM BIG, WORK HARD",
  "SUCCESS STARTS HERE",
  "NEVER GIVE UP",
  "MAKE IT HAPPEN",
  "STRIVE FOR GREATNESS",
  "BELIEVE IN YOURSELF",
  "EXPLORE NEW HORIZONS",
  "PUSH YOUR LIMITS",
  "CREATE YOUR LEGACY",
  "FOLLOW YOUR PASSION",
  "LEAD WITH PURPOSE",
  "INSPIRE AND MOTIVATE",
  "EMPOWER OTHERS",
  "BE THE CHANGE",
  "SPREAD POSITIVITY",
  "LIVE WITH INTENTION",
];

function Scroller() {
  return (
    <div className="relative h-11.5 w-full overflow-hidden text-lg font-bold">
      <Image src={gradientPng} alt="" className="absolute h-full w-full" />
      <div className="absolute top-0 flex h-full animate-scroller items-center gap-6 whitespace-nowrap">
        {SCROLL_PHRASES.map((phrase) => {
          return <div key={phrase}>{phrase}</div>;
        })}
      </div>
      <div className="absolute top-0 ml-6 flex h-full animate-scrollerLoop items-center gap-6 whitespace-nowrap">
        {SCROLL_PHRASES.map((phrase) => {
          return <div key={phrase}>{phrase}</div>;
        })}
      </div>
    </div>
  );
}

export default Scroller;
