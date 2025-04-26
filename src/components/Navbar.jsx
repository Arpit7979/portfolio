import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-10 px-20 bg-slate-900 text-white">
      <img className="w-30" src="/ark.png" alt="" />
      <div className="flex gap-10">
        <h2>ABOUT ME</h2>
        <h2>SKILLS</h2>
        <h2>PROJECTS</h2>
      </div>
      <div className="flex gap-2 border-1 rounded-full cursor-pointer p-0.5">
        <button className="py-2 px-4">CONTACT</button>
        <div className="bg-[#ffde59] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={assets.arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
