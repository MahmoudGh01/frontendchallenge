import React from "react";

import Image from "next/image";

import companyLogo from "../../../public/company-logo.png";
import HeroImage from "../../../public/heropageImage.png";
import texture from "../../../public/heroPageTexture.png";
import { ResponsiveHero } from "./responsive-hero";

const rows = 10;
const columns = 20;
export function Hero() {
  return (
    <div className="lg:px-30 mt-28 sm:mt-40 sm:px-0 md:px-20 xl:px-60">
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-2">
          <div className="">
            <div className="">
              <div className="relative w-[440px] text-5xl text-violet-700">
                Interaction Design Apprenticeship
                <Image
                  src={HeroImage}
                  width={200}
                  height={200}
                  alt="hero"
                  className="absolute -right-4 -top-20 rotate-[20deg] opacity-20"
                />
              </div>
            </div>
            <div className="order-[3]">
              <div className="mt-10 w-[440px] text-xl font-semibold text-black">
                A fully funded work-study program to launch your tech career
              </div>
              <div className="mt-10 w-[440px] font-normal text-black">
                Harbour.Space has partnered with SCG to empower driven talent
                and eliminate the barriers to accessing exceptional education
                and career opportunities through a Masters Fellowship.
              </div>
              <div className="mt-10 flex w-[440px] items-center space-x-1">
                <div className="font-bold text-black">Position:</div>
                <div className="font-normal text-black">
                  Marketing Performance
                </div>
              </div>
              <div className="mt-12 flex h-[58px] w-[168px] items-center justify-center rounded-full bg-[#685DC5] text-lg text-white">
                Apply Now
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center">
              <Image
                src={companyLogo}
                width={80}
                height={80}
                alt="hero"
                className=""
              />
              <div className="ml-16 flex flex-col items-start space-y-1">
                <div className="text-xl text-black opacity-50">Powered by:</div>
                <div className="text-3xl text-black">Zeptolab</div>
              </div>
            </div>
            <div>
              <div className="mt-10 flex h-[116px] w-[480px] flex-col items-start justify-center rounded-[4px] border border-[#DADADA] pl-6 font-normal text-black">
                <div className="text-lg font-bold text-[#685DC5]">
                  Application closes in
                </div>
                <div className="text-3xl">6 Day : 22 Hrs : 56 Min : 13 Seg</div>
              </div>
              <div className="relative z-10 mt-10 flex h-[200px] w-[480px] flex-col items-start justify-center overflow-hidden rounded-[4px] border border-[#DADADA] bg-white pl-6 font-normal text-black">
                <div className="grid grid-cols-2">
                  <div className="ml-6">
                    <div className="text-xl text-[#685DC5]">Location</div>
                    <div className="text-xl">Bangkok</div>
                  </div>
                  <div className="ml-20">
                    <div className="text-xl text-[#685DC5]">Duration</div>
                    <div className="w-[106px] text-xl">1 Year Full-Time</div>
                  </div>
                  <div className="ml-6">
                    <div className="text-xl text-[#685DC5]">Start date</div>
                    <div className="text-xl">30 June 2020</div>
                  </div>
                  <div className="ml-20">
                    <div className="text-xl text-[#685DC5]">End date</div>
                    <div className="text-xl">3 Aug 2020</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 right-48 z-0 hidden h-[257px] w-[560px] overflow-hidden border border-[#E6E6E6] xl:block">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                  <div key={rowIndex} className="flex">
                    {Array.from({ length: columns }).map((_, colIndex) => (
                      <Image
                        key={colIndex}
                        src={texture}
                        alt="Repeated Image"
                        className="h-12 w-12"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveHero />
    </div>
  );
}