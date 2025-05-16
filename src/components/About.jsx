import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = ({ aboutRef, ScrollToProject }) => {
  return (
    <section ref={aboutRef}>
      <div className="bg-slate-900 flex flex-col items-center md:px-30 md:py-25 px-5 py-10 text-center relative h-[500px]">
        <h1 className="md:text-5xl text-4xl font-bold text-[#ffde59] mb-5">
          WHO AM I?
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white pt-10 md:w-1/3 w-[70%]"
        >
          <h3>I am full-stack Website Developer specialized in React.js</h3>
          <h3 className="pt-5">
            Programming is my passion, that's the reason I am working at the
            time of my academic career
          </h3>
        </motion.div>
        <img
          className="md:block hidden h-70 absolute left-43 rotate-12 rounded-lg shadow-xl/100 inset-shadow-sm inset-shadow-indigo-100"
          src={assets.arpit1}
          alt=""
        />
        <img
          className=" md:h-50 h-20 absolute left-1 md:left-300 top-35 -rotate-12 rounded-lg shadow-xl/100 inset-shadow-sm inset-shadow-indigo-100"
          src={assets.arpit2}
          alt=""
        />
        <button
          onClick={() => ScrollToProject()}
          className="absolute bottom-10 bg-[#ffde59] p-3 rounded-full cursor-pointer border-1 border-black text-black font-bold"
        >
          SHOW MY PROJECTS
        </button>
      </div>
    </section>
  );
};

export default About;
