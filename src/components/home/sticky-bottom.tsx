import React from "react";

export function StickyBottom() {
  return (
      <div className="sticky bottom-0 grid h-20 grid-cols-6 gap-4 bg-white pl-10 text-black">
        <div className="flex flex-col items-start justify-center pl-9 text-left">
          <div className="font-bold">Zeptolab</div>
          <div>Marketing Performance</div>
        </div>
        <div className="flex flex-col items-start justify-center pl-9 text-left">
          <div className="font-bold">Location</div>
          <div>Bangkok</div>
        </div>
        <div className="flex flex-col items-start justify-center pl-9 text-left">
          <div className="font-bold">Duration</div>
          <div>1 Year Full-time</div>
        </div>
        <div className="flex flex-col items-start justify-center pl-9 text-left">
          <div className="font-bold">Start date</div>
          <div>3 Aug 2020</div>
        </div>
        <div className="flex flex-col items-start justify-center pl-9 text-left">
          <div className="font-bold">Application deadline</div>
          <div>30 June 2020</div>
        </div>
        <div className="flex flex-col items-start justify-center pl-9 text-left">
          <div className="font-bold">Application closes in</div>
          <div>6 Day : 22 Hrs : 56 min</div>
        </div>
      </div>
  );
}