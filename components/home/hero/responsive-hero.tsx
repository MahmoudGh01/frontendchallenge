import React from "react";

import Image from "next/image";

import companyLogo from "../../../public/company-logo.png";
import HeroImage from "../../../public/heropageImage.png";

export function ResponsiveHero() {
  return (
    <div>
      <div className="block lg:hidden">
        <div className="grid grid-cols-1">
          <div className="ml-5">
            <div className="relative h-[172px] w-[334px] text-4xl text-violet-700">
              Interaction Design Apprenticeship
              <Image
                src={HeroImage}
                width={150}
                height={150}
                alt="hero"
                className="absolute -right-4 -top-20 rotate-[20deg] opacity-20"
              />
            </div>
          </div>

          <div className="-mt-10">
            <div className="flex flex-col items-start justify-start">
              <div className="ml-5 flex space-x-1">
                <div className="text-md text-black opacity-50">Powered by:</div>
                <div className="text-md text-black">Zeptolab</div>
              </div>
              <Image
                src={companyLogo}
                width={62}
                height={62}
                alt="hero"
                className="ml-5 mt-2"
              />
            </div>
            <div>
              <div className="mx-3 mt-10 flex flex-col items-start justify-center rounded-[4px] border border-[#DADADA] p-6 pl-6 font-normal text-black">
                <div className="text-xl text-[#685DC5]">
                  Application closes in
                </div>
                <div className="text-2xl">6 Day : 22 Hrs : 56 Min : 13 Seg</div>
              </div>
              <div className="relative z-10 mx-3 mt-10 flex flex-col items-start justify-center overflow-hidden rounded-[4px] border border-[#DADADA] bg-white p-5 pl-6 font-normal text-black">
                <div className="grid grid-cols-2">
                  <div className="ml-2">
                    <div className="text-lg text-[#685DC5]">Location</div>
                    <div className="text-lg">Bangkok</div>
                  </div>
                  <div className="ml-12">
                    <div className="text-lg text-[#685DC5]">Duration</div>
                    <div className="text-lg">1 Year Full-Time</div>
                  </div>
                  <div className="ml-2">
                    <div className="text-lg text-[#685DC5]">Start date</div>
                    <div className="text-lg">30 June 2020</div>
                  </div>
                  <div className="ml-12">
                    <div className="text-lg text-[#685DC5]">End date</div>
                    <div className="text-lg">3 Aug 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-16">
          <div className="mt-10 text-xl font-semibold text-black">
            A fully funded work-study program to launch your tech career
          </div>
          <div className="mt-10 font-normal text-black">
            Harbour.Space has partnered with SCG to empower driven talent and
            eliminate the barriers to accessing exceptional education and career
            opportunities through a Masters Fellowship.
          </div>
          <div className="mt-10 font-normal text-black">
            Scholarship candidates will receive full financial support to
            complete their Masters program at Harbour.Space while gaining
            invaluable work experience through an internship with SCG, a leading
            company in the industry.
          </div>

          <div className="mt-10 flex items-center space-x-1">
            <div className="font-bold text-black">Position:</div>
            <div className="font-normal text-black">Marketing Performance</div>
          </div>
          <div className="mt-12 flex h-[54px] w-[157.34px] items-center justify-center rounded-full bg-[#685DC5] text-white">
            Apply Now
          </div>
        </div>
      </div>
    </div>
  );
}