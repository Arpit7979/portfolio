import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-slate-900 flex flex-col items-center px-30 py-25 text-center relative h-[500px]">
      <h1 className="text-5xl font-bold text-[#ffde59] mb-5">WHO AM I?</h1>
      <div className="text-white pt-10 w-1/3">
        <h3>I am full-stack Website Developer specialized in React.js</h3>
        <h3 className="pt-5">
          Programming is my passion, that's the reasion I am working at the time
          of my academic career
        </h3>
      </div>
      <img
        className="h-70 absolute left-43 rotate-12 rounded-lg shadow-xl/100 inset-shadow-sm inset-shadow-indigo-100"
        src={assets.arpit1}
        alt=""
      />
      <img
        className="h-50 absolute right-55 -rotate-12 rounded-lg shadow-xl/100 inset-shadow-sm inset-shadow-indigo-100"
        src={assets.arpit2}
        alt=""
      />
      <button className="absolute bottom-10 bg-[#ffde59] p-3 rounded-full cursor-pointer border-1 border-black text-black font-bold">
        SHOW MY PROJECTS
      </button>
    </div>
  );
};

export default About;
