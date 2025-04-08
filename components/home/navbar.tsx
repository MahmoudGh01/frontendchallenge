import React from "react";

import Image from "next/image";

import more from "../../public/more.png";

export function Navbar() {
  return (
    <div className="relative flex h-12 w-screen items-center justify-between bg-violet-600 px-5 sm:h-14 sm:px-20">
      <div className="flex space-x-2">
        <div className="text-lg font-bold uppercase text-white">
          harbour.space
        </div>
        <div className="text-xs uppercase text-white">/interaction design</div>
      </div>
      <div className="flex items-center space-x-11">
        <div className="z-10 mt-16 hidden h-full rounded-full border-green-500 bg-emerald-600 p-8 font-bold hover:bg-emerald-700 md:block">
          <div className="flex flex-col items-center justify-center -space-y-2">
            <div className="font-roboto uppercase text-white">APPLY</div>
            <div className="font-roboto uppercase text-white">NOW</div>
          </div>
        </div>
        <div>
          <Image src={more} width={40} height={40} alt="logo" />
        </div>
      </div>
    </div>
  );
}