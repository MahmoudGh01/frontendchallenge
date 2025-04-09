"use client";

import React, { useRef } from "react";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import texture from "../../../public/heroPageTexture.png";
import person from "../../../public/personfemale.png";

const rows = 20;
const columns = 30;
export function DragableTestimonials() {
  const carouselRef = useRef<CarouselApi>(null);
  const handlePrevious = () => {
    carouselRef.current?.scrollPrev();
  };

  const handleNext = () => {
    carouselRef.current?.scrollNext();
  };
  return (
    <div>
      <div className="hidden sm:block">
        <div className="mb-96 mt-24 flex flex-col items-center justify-center overflow-hidden">
          <div className="max-h-[394.07px] max-w-[1120px] overflow-hidden border border-slate-300">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex">
                {Array.from({ length: columns }).map((_, colIndex) => (
                  <Image
                    key={colIndex}
                    src={texture}
                    alt="Repeated Image"
                    className="h-12 w-12 bg-[#685DC5] opacity-100"
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="-mt-72">
            <Carousel className="h-full max-h-[459.92px] w-full max-w-[800px]">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative h-[459.92px] border border-slate-300 bg-white">
                    <div className="flex items-center justify-between p-9">
                      <div className="flex items-center">
                        <Image
                          src={person}
                          alt="Person"
                          className="h-[75px] w-[75px] rounded-full border-4 object-cover"
                        />
                        <div className="ml-4 flex flex-col">
                          <p className="font-bold">Irene Pereyra</p>
                          <p className="text-sm">
                            Interaction Design Fellow ‘19
                          </p>
                        </div>
                      </div>
                      <div className="mr-10">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.43243 6.85645C7.08961 6.85645 6 7.92225 6 9.23572C6 10.5492 7.08961 11.6373 8.43243 11.6373C9.77525 11.6373 10.8649 10.5492 10.8649 9.23572C10.864 7.92225 9.77441 6.85645 8.43243 6.85645ZM23.9955 24.0675V24.0667H24V17.4059C24 14.1474 23.3022 11.6373 19.5129 11.6373C17.6913 11.6373 16.4689 12.6422 15.9698 13.595H15.9171V11.9415H12.3243V24.0667H16.0654V18.0628C16.0654 16.4819 16.3635 14.9533 18.3108 14.9533C20.2295 14.9533 20.2582 16.7574 20.2582 18.1642V24.0675H23.9955ZM10.3784 12.5935H6.48649V24.0675H10.3784V12.5935Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-1 h-[310.54px] border-b-8 border-slate-200 bg-[#FBFBFB]">
                      <div>
                        <div className="flex flex-col items-start justify-between p-20 text-[26px] opacity-70">
                          <p className="">
                            This Fellowship was a turning point in my career. I
                            wouldn’t be where I am today without the financial
                            support and experienced offered through the program.
                          </p>
                          <div className="mt-9 text-[16px]">
                            Education · B.A. Visual Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative h-[459.92px] border border-slate-300 bg-white">
                    <div className="flex items-center justify-between p-9">
                      <div className="flex items-center">
                        <Image
                          src={person}
                          alt="Person"
                          className="h-[75px] w-[75px] rounded-full border-4 object-cover"
                        />
                        <div className="ml-4 flex flex-col">
                          <p className="font-bold">Irene Pereyra</p>
                          <p className="text-sm">
                            Interaction Design Fellow ‘19
                          </p>
                        </div>
                      </div>
                      <div className="mr-10">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.43243 6.85645C7.08961 6.85645 6 7.92225 6 9.23572C6 10.5492 7.08961 11.6373 8.43243 11.6373C9.77525 11.6373 10.8649 10.5492 10.8649 9.23572C10.864 7.92225 9.77441 6.85645 8.43243 6.85645ZM23.9955 24.0675V24.0667H24V17.4059C24 14.1474 23.3022 11.6373 19.5129 11.6373C17.6913 11.6373 16.4689 12.6422 15.9698 13.595H15.9171V11.9415H12.3243V24.0667H16.0654V18.0628C16.0654 16.4819 16.3635 14.9533 18.3108 14.9533C20.2295 14.9533 20.2582 16.7574 20.2582 18.1642V24.0675H23.9955ZM10.3784 12.5935H6.48649V24.0675H10.3784V12.5935Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-1 h-[310.54px] border-b-8 border-slate-200 bg-[#FBFBFB]">
                      <div>
                        <div className="flex flex-col items-start justify-between p-20 text-[26px] opacity-70">
                          <p className="">
                            This Fellowship was a turning point in my career. I
                            wouldn’t be where I am today without the financial
                            support and experienced offered through the program.
                          </p>
                          <div className="mt-9 text-[16px]">
                            Education · B.A. Visual Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative h-[459.92px] border border-slate-300 bg-white">
                    <div className="flex items-center justify-between p-9">
                      <div className="flex items-center">
                        <Image
                          src={person}
                          alt="Person"
                          className="h-[75px] w-[75px] rounded-full border-4 object-cover"
                        />
                        <div className="ml-4 flex flex-col">
                          <p className="font-bold">Irene Pereyra</p>
                          <p className="text-sm">
                            Interaction Design Fellow ‘19
                          </p>
                        </div>
                      </div>
                      <div className="mr-10">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.43243 6.85645C7.08961 6.85645 6 7.92225 6 9.23572C6 10.5492 7.08961 11.6373 8.43243 11.6373C9.77525 11.6373 10.8649 10.5492 10.8649 9.23572C10.864 7.92225 9.77441 6.85645 8.43243 6.85645ZM23.9955 24.0675V24.0667H24V17.4059C24 14.1474 23.3022 11.6373 19.5129 11.6373C17.6913 11.6373 16.4689 12.6422 15.9698 13.595H15.9171V11.9415H12.3243V24.0667H16.0654V18.0628C16.0654 16.4819 16.3635 14.9533 18.3108 14.9533C20.2295 14.9533 20.2582 16.7574 20.2582 18.1642V24.0675H23.9955ZM10.3784 12.5935H6.48649V24.0675H10.3784V12.5935Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-1 h-[310.54px] border-b-8 border-slate-200 bg-[#FBFBFB]">
                      <div>
                        <div className="flex flex-col items-start justify-between p-20 text-[26px] opacity-70">
                          <p className="">
                            This Fellowship was a turning point in my career. I
                            wouldn’t be where I am today without the financial
                            support and experienced offered through the program.
                          </p>
                          <div className="mt-9 text-[16px]">
                            Education · B.A. Visual Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative h-[459.92px] border border-slate-300 bg-white">
                    <div className="flex items-center justify-between p-9">
                      <div className="flex items-center">
                        <Image
                          src={person}
                          alt="Person"
                          className="h-[75px] w-[75px] rounded-full border-4 object-cover"
                        />
                        <div className="ml-4 flex flex-col">
                          <p className="font-bold">Irene Pereyra</p>
                          <p className="text-sm">
                            Interaction Design Fellow ‘19
                          </p>
                        </div>
                      </div>
                      <div className="mr-10">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.43243 6.85645C7.08961 6.85645 6 7.92225 6 9.23572C6 10.5492 7.08961 11.6373 8.43243 11.6373C9.77525 11.6373 10.8649 10.5492 10.8649 9.23572C10.864 7.92225 9.77441 6.85645 8.43243 6.85645ZM23.9955 24.0675V24.0667H24V17.4059C24 14.1474 23.3022 11.6373 19.5129 11.6373C17.6913 11.6373 16.4689 12.6422 15.9698 13.595H15.9171V11.9415H12.3243V24.0667H16.0654V18.0628C16.0654 16.4819 16.3635 14.9533 18.3108 14.9533C20.2295 14.9533 20.2582 16.7574 20.2582 18.1642V24.0675H23.9955ZM10.3784 12.5935H6.48649V24.0675H10.3784V12.5935Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-1 h-[310.54px] border-b-8 border-slate-200 bg-[#FBFBFB]">
                      <div>
                        <div className="flex flex-col items-start justify-between p-20 text-[26px] opacity-70">
                          <p className="">
                            This Fellowship was a turning point in my career. I
                            wouldn’t be where I am today without the financial
                            support and experienced offered through the program.
                          </p>
                          <div className="mt-9 text-[16px]">
                            Education · B.A. Visual Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative h-[459.92px] border border-slate-300 bg-white">
                    <div className="flex items-center justify-between p-9">
                      <div className="flex items-center">
                        <Image
                          src={person}
                          alt="Person"
                          className="h-[75px] w-[75px] rounded-full border-4 object-cover"
                        />
                        <div className="ml-4 flex flex-col">
                          <p className="font-bold">Irene Pereyra</p>
                          <p className="text-sm">
                            Interaction Design Fellow ‘19
                          </p>
                        </div>
                      </div>
                      <div className="mr-10">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.43243 6.85645C7.08961 6.85645 6 7.92225 6 9.23572C6 10.5492 7.08961 11.6373 8.43243 11.6373C9.77525 11.6373 10.8649 10.5492 10.8649 9.23572C10.864 7.92225 9.77441 6.85645 8.43243 6.85645ZM23.9955 24.0675V24.0667H24V17.4059C24 14.1474 23.3022 11.6373 19.5129 11.6373C17.6913 11.6373 16.4689 12.6422 15.9698 13.595H15.9171V11.9415H12.3243V24.0667H16.0654V18.0628C16.0654 16.4819 16.3635 14.9533 18.3108 14.9533C20.2295 14.9533 20.2582 16.7574 20.2582 18.1642V24.0675H23.9955ZM10.3784 12.5935H6.48649V24.0675H10.3784V12.5935Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-1 h-[310.54px] border-b-8 border-slate-200 bg-[#FBFBFB]">
                      <div>
                        <div className="flex flex-col items-start justify-between p-20 text-[26px] opacity-70">
                          <p className="">
                            This Fellowship was a turning point in my career. I
                            wouldn’t be where I am today without the financial
                            support and experienced offered through the program.
                          </p>
                          <div className="mt-9 text-[16px]">
                            Education · B.A. Visual Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      {/* small screens */}
      <div className="block sm:hidden">
        <div className="mb-96 mt-24 flex flex-col items-center justify-center">
          <div className="relative h-[257px] w-full overflow-hidden border border-slate-300 bg-[#685DC5]">
            {/* Texture overlay */}
            <div className="pointer-events-none absolute inset-0 flex flex-wrap opacity-30 mix-blend-multiply">
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex">
                  {Array.from({ length: columns }).map((_, colIndex) => (
                    <Image
                      key={colIndex}
                      src={texture}
                      alt="Repeated Texture"
                      className="h-12 w-12"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="-mt-40">
            <Carousel className="h-full max-h-[459.92px] w-full max-w-[333.02px]">
              <CarouselContent>
                {[...Array(5)].map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[459.92px] border border-slate-300 bg-white">
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          <Image
                            src={person}
                            alt="Person"
                            width={50}
                            height={50}
                            className="h-[50px] w-[50px] rounded-full border-4 object-cover"
                          />
                          <div className="ml-4 flex flex-col">
                            <p className="font-bold text-[#685DC5]">
                              Irene Pereyra
                            </p>
                            <p className="text-[16px]">Research Lead, SCG</p>
                          </div>
                        </div>
                        <div className="mr-2">
                          <svg
                            width="30"
                            height="31"
                            viewBox="0 0 30 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.43243 6.85645C7.08961 6.85645 6 7.92225 6 9.23572C6 10.5492 7.08961 11.6373 8.43243 11.6373C9.77525 11.6373 10.8649 10.5492 10.8649 9.23572C10.864 7.92225 9.77441 6.85645 8.43243 6.85645ZM23.9955 24.0675V24.0667H24V17.4059C24 14.1474 23.3022 11.6373 19.5129 11.6373C17.6913 11.6373 16.4689 12.6422 15.9698 13.595H15.9171V11.9415H12.3243V24.0667H16.0654V18.0628C16.0654 16.4819 16.3635 14.9533 18.3108 14.9533C20.2295 14.9533 20.2582 16.7574 20.2582 18.1642V24.0675H23.9955ZM10.3784 12.5935H6.48649V24.0675H10.3784V12.5935Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-1 h-[203px] border-slate-200 bg-[#FBFBFB]">
                        <div>
                          <div className="flex flex-col items-start justify-between p-6 text-[24px] opacity-70">
                            <p className="">
                              This Fellowship was a turning point in my career.
                              I wouldnt be where I am today without the
                              financial support and experienced offered through
                              the program.
                            </p>
                            <div className="mt-9 text-[16px]">
                              Education · B.A. Visual Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="mt-4 flex justify-end gap-4">
              <button
                className="rounded-full border border-slate-200 p-5 hover:bg-gray-100"
                onClick={handlePrevious}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                className="rounded-full border border-slate-200 p-5 hover:bg-gray-100"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}