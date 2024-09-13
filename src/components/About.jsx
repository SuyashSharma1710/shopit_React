import React from "react";
import { about, about1 } from "../assets";

function About() {
  return (
    <div className="w-full p-8 bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="bg-gray-100 w-full text-teal-950 text-7xl sm:text-left pb-10 px-10">
        About
      </h1>
      <img src={about1} className="mix-blend-multiply " alt="" />
      <div className="text-teal-700 flex gap-6 flex-col sm:flex-row justify-evenly items-center mt-4">
        <p className="w-60 sm:w-1/4 ">
           <span className="font-bold text-xl text-teal-900">SIMPLICITY IN DESIGN</span> <br /> No flashy logos. No senseless details. Just the
          world's most comfortable shoes, made naturally and designed
          practically. It's that simple.
        </p>
        <p className="w-60 sm:w-1/4">
          <span className="font-bold text-xl text-teal-900">CONFIDENCE IN COMFORT</span>  <br />Trying is believing. Give our shoes a shot for
          30 days, and if you're not walking on cloud nine, we'll take them
          back—no questions asked.
        </p>
        <p className="w-60 sm:w-1/4">
          <span className="font-bold text-xl text-teal-900">MADE FROM NATURE </span><br />The footwear industry often overlooks Mother Nature's
          materials in favor of cheaper, synthetic alternatives. We think it's
          time to change that.
        </p>
      </div>
    </div>
  );
}

export default About;
