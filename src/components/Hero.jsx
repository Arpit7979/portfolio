import React from "react";
import { assets } from "../assets/assets";

const Hero = ({ ScrollToProject }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-slate-900 to-indigo-200 text-white overflow-hidden relative">
      <h1 className="md:text-6xl text-5xl text-center font-bold md:p-10 p-8">
        I'm <span className="text-[#ffde59]">Arpit Kumar</span> <br />{" "}
        <div className="mt-4">
          <span className="border-1 rounded-lg p-1">Full Stack</span> Developer
        </div>
      </h1>
      <div className="flex md:flex-row flex-col w-full justify-between items-center">
        <div className="bg-slate-900 text-white p-5 rounded-2xl max-w-80 -rotate-10 shadow-xl/100 inset-shadow-sm inset-shadow-indigo-200">
          <h2 className="font-bold md:text-xl text-sm">Client Review</h2>
          <p className="md:text-sm text-xs text-[#9E9FA5]">
            Outstanding Web Developer, Highly recommended without Hesitation
          </p>
        </div>
        <img
          className="md:w-100 w-50 md:rotate-0 rotate-10"
          src={assets.arpit}
          alt=""
        />
        <div className="bg-slate-900 text-white p-5 rounded-2xl max-w-80 rotate-10 shadow-xl/100 inset-shadow-sm inset-shadow-indigo-200">
          <h2 className="font-bold md:text-xl text-sm">MY EXPERTISE</h2>
          <div className="flex gap-2 items-center py-2">
            <h4 className="md:text-sm text-xs text-[#9E9FA5]">FRONTEND</h4>
            <div className="md:h-1 h-0.5 w-100 bg-white rounded-lg flex items-center relative">
              <div className="bg-red-400 h-4 w-4 rounded-full absolute end-3"></div>
            </div>
            <h4 className="text-xs text-[#9E9FA5] border-1 p-1 rounded-lg">
              88%
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <h4 className="md:text-sm text-xs text-[#9E9FA5]">BACKEND</h4>
            <div className="md:h-1 h-0.5  w-100 bg-white rounded-lg flex items-center relative">
              <div className="bg-red-400 h-4 w-4 rounded-full absolute end-5"></div>
            </div>
            <h4 className="text-xs text-[#9E9FA5] border-1 p-1 rounded-lg">
              80%
            </h4>
          </div>
        </div>
      </div>
      <button
        onClick={() => ScrollToProject()}
        className="md:block hidden absolute bottom-4 bg-[#ffde59] p-3 rounded-full cursor-pointer border-1 border-black text-black font-bold"
      >
        MY PROJECTS
      </button>
    </div>
  );
};

export default Hero;
