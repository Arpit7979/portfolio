import React from "react";
import Card from "./Card";
import { assets } from "../assets/assets";
const images = [
  assets.html,
  assets.css,
  assets.js,
  assets.react,
  assets.node,
  assets.tailwind,
  assets.mongodb,
  assets.next,
];

const Skill = () => {
  return (
    <div className="bg-slate-900 text-white p-20 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-[#ffde59] mb-13">MY SKILLS</h1>
      <div className="flex gap-7">
        <div className="grid grid-cols-4 gap-2">
          {images.map((el, i) => (
            <Card name={el} key={i} />
          ))}
        </div>
        <div className="w-100 bg-slate-800 flex flex-col items-center justify-center gap-3 rounded-lg">
          <h3 className="text-5xl font-bold w-50 text-center">
            For More Details
          </h3>
          <button className=" bg-[#ffde59] p-3 rounded-full cursor-pointer border-1 border-black text-black font-bold">
            Download My CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
