import React from "react";

export function StickyBottom() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-black shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <div className="flex flex-col items-start justify-center">
            <div className="text-sm font-bold">Zeptolab</div>
            <div className="text-sm">Marketing Performance</div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="text-sm font-bold">Location</div>
            <div className="text-sm">Bangkok</div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="text-sm font-bold">Duration</div>
            <div className="text-sm">1 Year Full-time</div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="text-sm font-bold">Start date</div>
            <div className="text-sm">3 Aug 2020</div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="text-sm font-bold">Application deadline</div>
            <div className="text-sm">30 June 2020</div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="text-sm font-bold">Application closes in</div>
            <div className="text-sm">6 Day : 22 Hrs : 56 min</div>
          </div>
        </div>
      </div>
    </div>
  );
}