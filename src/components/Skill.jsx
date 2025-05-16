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

const otherImages = [
  assets.ts,
  assets.bootstrap,
  assets.mongoose,
  assets.redux,
];

const Skill = ({ skillRef }) => {
  return (
    <section ref={skillRef}>
      <div className="bg-slate-900 text-white md:py-20 md:px-35 p-5 flex flex-col items-center">
        <h1 className="md:text-5xl text-4xl font-bold text-[#ffde59] mb-13">
          MY SKILLS
        </h1>
        <div className="flex md:flex-row flex-col gap-7 w-full">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {images.map((el, i) => (
              <Card name={el} key={i} />
            ))}
          </div>
          <div className="md:w-100 w-full bg-slate-800 flex flex-col items-center justify-center gap-3 rounded-lg md:p-0 p-5">
            <h3 className="md:text-5xl text-3xl font-bold w-50 text-center">
              For More Details
            </h3>
            <a href="/arpit_cv.pdf" download="MyFile.pdf">
              <button className=" bg-[#ffde59] p-3 rounded-full cursor-pointer border-1 border-black text-black font-bold">
                Download My CV
              </button>
            </a>
          </div>
        </div>
        <div className="bg-slate-800 p-10 w-full flex flex-col items-center md:gap-15 gap-5 mt-30 rounded-lg shadow-xl/100 inset-shadow-sm inset-shadow-indigo-100">
          <h1 className="md:text-3xl text-2xl font-bold text-[#ffde59]">
            ADDITIONAL SKILLS
          </h1>
          <div className="flex md:gap-15 gap-4 md:flex-nowrap flex-wrap">
            {otherImages.map((image, i) => (
              <img className="w-15" src={image} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
