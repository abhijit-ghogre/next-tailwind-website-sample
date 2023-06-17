import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="hidden sm:block">
      <div className="mt-44 flex items-center gap-20 py-48">
        <div className="relative flex-1">
          <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-12 overflow-hidden rounded-full">
            <Image
              src="/assets/about.png"
              alt="Image"
              height={373}
              width={373}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative z-10 text-9xl font-bold">ABOUT US</div>
          <div className="relative z-10 mt-5 space-y-1 text-lg opacity-70">
            <div>Lorem</div>
            <div>Lorem</div>
          </div>
        </div>
        <div className="flex-1 text-lg opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
