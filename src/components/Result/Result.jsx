import React from "react";

function Result() {
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <h1 className="text-center font-bold py-8 text-2xl ">
        Learning paths based on your answers
      </h1>
      <p className="text-center pb-6">
        Choose one to get started. You can switch anytime.
      </p>
      <div className="w-full py-4 sm:w-full flex flex-col sm:flex-row gap-4 py-4 sm:py-8">
        <div className="relative flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg p-4 hover:border-yellow-300">
          <div
            className="absolute font-bold top-0 left-1/3 bg-popularBg rounded-full px-2 -mt-3 text-sm"
            style={{ fontSize: "0.8rem" }}
          >
            MOST POPULAR
          </div>
          <p>
            <span className="font-bold">Foundational Math</span> Build your
            foundational skills in algebraic, geometry, and probability.
          </p>
          <img src="images/package.png" alt="package" className="w-1/4" />
        </div>

        <div className="flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  p-4 hover:border-yellow-300">
          <p>
            <span className="font-bold">Mathematical Thinking</span> Build your
            foundational skills in algebraic, geometry, and probability.
          </p>
          <img src="images/package.png" alt="package" className="w-1/4" />
        </div>
      </div>
    </div>
  );
}

export default Result;
