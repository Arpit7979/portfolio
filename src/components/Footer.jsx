import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-slate-900 flex flex-col items-center gap-8 p-10">
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/arpit-singh-b2ba5b279/"
          target="_black"
        >
          <img className="w-8" src={assets.linkedin} alt="" />
        </a>
        <a href="https://github.com/Arpit7979">
          <img className="w-8" src={assets.github} alt="" />
        </a>
      </div>
      <h2 className="text-white text-sm">
        Copyright © 2025 Arpit Kumar. All right reserved.
      </h2>
    </div>
  );
};

export default Footer;
