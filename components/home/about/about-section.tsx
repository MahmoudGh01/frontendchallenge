import React from "react";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import building from "../../../public/building.png";
import texture from "../../../public/heroPageTexture.png";
import person from "../../../public/person.jpg";

const rows = 20;
const columns = 20;
export function AboutSection() {
  return (
    <div className="">
      <div className="lg:px-30 hidden sm:block sm:px-0 md:px-20 xl:px-60">
        <div className="mt-96 grid grid-cols-1 lg:grid-cols-2">
          {/* first column */}
          <div className="relative ml-20 h-[438px] w-[438px] overflow-hidden rounded-full border border-slate-300 lg:ml-0">
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex">
                  {Array.from({ length: columns }).map((_, colIndex) => (
                    <Image
                      key={colIndex}
                      src={texture}
                      alt="Repeated Image"
                      className="h-12 w-12 opacity-100"
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
              <Image
                src={person}
                alt="person"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {/* second column */}
          <div className="ml-20 lg:ml-0">
            <div className="mt-20 h-[112px] w-[479px] text-[48px] text-[#685DC5]">
              About the apprenticeship
            </div>
            <div className="left-[760px] top-[1258px] mt-16 h-[160px] w-[479px] font-sans text-[22px] font-light leading-[32px] tracking-[-0.33px]">
              Our scholarships are designed to give talented and driven young
              people from any background access to top-class education,
              experience and network. We offer a fully-funded master’s degree
              alongside an apprenticeship and a guaranteed job upon graduation.
            </div>
          </div>
        </div>
        <div className="mx-7 mt-32 md:mx-0">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="rounded-sm border border-[#DADADA] p-6 lg:row-span-5">
              <div className="ml-3 font-semibold text-[#685DC5]">
                Scholarship value
              </div>
              <div className="ml-3 mt-10 text-left font-sans text-4xl font-light leading-tight tracking-[-0.44px] lg:text-[48px]">
                €31,300
              </div>
              <Separator className="mt-[175px]" />
              <div className="mr-7 mt-10 grid grid-cols-2">
                <div>
                  <div className="ml-1 font-semibold text-[#685DC5]">
                    Tuition covered
                  </div>
                  <div className="ml-2 text-left font-sans font-light leading-[24px] tracking-[-0.44px]">
                    €20,900
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#685DC5] lg:ml-8">
                    Remaining
                  </div>
                  <div className="text-left font-sans font-light leading-[24px] tracking-[-0.44px] lg:ml-9">
                    €2,000
                  </div>
                </div>
              </div>
              <div>
                <div className="ml-1 mt-6 font-semibold text-[#685DC5]">
                  Living stipend
                </div>
                <div className="ml-2 text-left font-sans font-light leading-[24px] tracking-[-0.44px]">
                  €8,400 (€700/month)
                </div>
              </div>
            </div>
            <div className="rounded-sm border border-[#DADADA] p-6 lg:col-span-2">
              <div className="ml-3 mt-2 font-semibold text-[#685DC5]">
                Study commitment
              </div>
              <div className="ml-3 mt-2 text-left font-sans text-2xl font-light leading-[24px] tracking-[-0.44px] lg:text-3xl">
                3 hours / day
              </div>
              <Separator className="ml-3 mt-7 w-[27.82px]" />
              <div className="ml-3 mt-6 text-sm lg:text-base">
                You will complete 15 modules to graduate. Daily classes are 3
                hours, plus coursework to complete in your own time.
              </div>
            </div>
            <div className="rounded-sm border border-[#DADADA] p-6 lg:col-span-2">
              <div className="ml-3 mt-2 font-semibold text-[#685DC5]">
                Work commitment
              </div>
              <div className="ml-3 mt-2 text-left font-sans text-2xl font-light leading-[24px] tracking-[-0.44px] lg:text-3xl">
                4 hours / day
              </div>
              <Separator className="ml-3 mt-7 w-[27.82px]" />
              <div className="ml-3 mt-6 text-sm lg:text-base">
                Immerse yourself in the professional world during your
                apprenticeship. You’ll learn the ropes from the best and get to
                apply your newly acquired knowledge in the field from day one.
              </div>
            </div>
            <div className="overflow-hidden rounded-sm p-6 lg:col-span-4 lg:col-start-2">
              <div className="flex items-center justify-center">
                <Separator className="flex-grow" />
                <div className="mx-10 text-xs font-bold lg:text-sm">
                  GRADUATION
                </div>
                <Separator className="flex-grow" />
              </div>
            </div>
            <div className="-mt-9 rounded-sm border border-[#DADADA] p-6 lg:col-span-4 lg:col-start-2">
              <div className="ml-3 mt-2 font-semibold text-[#685DC5]">
                A full-time contract
              </div>
              <div className="ml-3 mt-2 text-left font-sans text-2xl font-light leading-[24px] tracking-[-0.44px] lg:text-3xl">
                1 Year / Full-Time
              </div>
              <Separator className="ml-3 mt-7 w-[27.82px]" />
              <div className="ml-3 mt-6 text-sm lg:text-base">
                You’ll be guaranteed a 1 year contract with SCG upon graduation.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* small screen */}
      <div className="block sm:hidden">
        <div className="mt-36 flex flex-col items-center justify-center">
          {/* first column */}
          <div className="">
            <div className="relative h-[334px] w-[334px] overflow-hidden rounded-full border border-slate-300 lg:ml-0">
              <div className="absolute inset-0 z-0 overflow-hidden">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                  <div key={rowIndex} className="flex">
                    {Array.from({ length: columns }).map((_, colIndex) => (
                      <Image
                        key={colIndex}
                        src={texture}
                        alt="Repeated Image"
                        className="h-12 w-12 opacity-100"
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="absolute left-1/2 top-1/2 z-20 h-[252px] w-[252px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
                <Image
                  src={building}
                  alt="person"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="-mt-40 h-[401px] w-[376px] bg-[#685DC5]"></div>
          <div className="z-10 -mt-[410px] flex h-[555px] w-[334px] flex-col items-center border border-slate-200 bg-[#FFFFFF] shadow-sm">
            <div className="mt-40 h-[80px] w-[288px] text-[35px] text-[#685DC5]">
              About the apprenticeship
            </div>
            <div className="mt-12 h-[208px] w-[285px] text-[18px] text-[#535353]">
              Our scholarships are designed to give talented and driven young
              people from any background access to top-class education,
              experience and network. We offer a fully-funded master’s degree
              alongside an apprenticeship and a guaranteed job upon graduation.
            </div>
          </div>
        </div>
        <div className="p-20">
          <div className="h-[22px] w-[147.68px] text-[#685DC5]">
            Fellowship value
          </div>
          <div className="h-[30px] w-[147.68px]">€31,300</div>
          <div className="mt-4 grid grid-cols-2">
            <div>
              <div className="text-[#685DC5]">Tuition</div>
              <div>€22,900</div>
            </div>
            <div>
              <div className="text-[#685DC5]">Remaining</div>
              <div>€8,400</div>
            </div>
          </div>
          <div>
            <div className="mt-6 text-[#685DC5]">Living stipend</div>
            <div>€8,400 (€700/month)</div>
          </div>
        </div>
        <div className="m-6 rounded-sm border border-slate-300 p-6">
          <div className="h-[22px] w-[147.68px] text-[#685DC5]">
            Study commitment
          </div>
          <div className="h-[30px] w-[140px] text-[24px]">3 hours / day</div>
          <Separator className="mt-10 h-[1px] w-[27.82px] bg-slate-300" />
          <div className="mt-4 text-sm">
            You will complete 15 modules to graduate. Daily classes are 3 hours,
            plus coursework to complete in your own time.
          </div>
        </div>
        <div className="m-6 rounded-sm border border-slate-300 p-6">
          <div className="h-[22px] w-[205px] text-[#685DC5]">
            Apprenticeship Commitment
          </div>
          <div className="h-[30px] w-[140px] text-[24px]">4 hours / day</div>
          <Separator className="mt-10 h-[1px] w-[27.82px] bg-slate-300" />
          <div className="mt-4 text-sm">
            Immerse yourself in the professional world during your
            apprenticeship. You’ll learn the ropes from the best and get to
            apply your newly acquired knowledge in the field from day one.
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Separator className="w-[86.7px] bg-slate-300" />
          <div className="mx-10 text-xs font-bold">GRADUATION</div>
          <Separator className="w-[86.7px] bg-slate-300" />
        </div>
        <div className="m-6 rounded-sm border border-slate-300 p-6">
          <div className="h-[22px] w-[147.68px] text-[#685DC5]">
            A full-time contract
          </div>
          <div className="h-[24px] text-[24px]">1 Year / Full-Time</div>
          <Separator className="mt-10 h-[1px] w-[27.82px] bg-slate-300" />
          <div className="mt-4 text-sm">
            You’ll be guaranteed a 1 year contract with SCG upon graduation.
          </div>
        </div>
      </div>
    </div>
  );
}