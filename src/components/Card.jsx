import React from "react";
import { easeInOut, motion } from "framer-motion";

const Card = ({ name }) => {
  return (
    <div className="md:w-50 md:h-50 h-30 w-40 bg-slate-800 flex items-center justify-center border-2 rounded-lg border-black shadow-xl/100 inset-shadow-sm inset-shadow-indigo-100">
      <motion.img
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: easeInOut,
        }}
        className="md:w-20 w-10"
        src={name}
        alt=""
      />
    </div>
  );
};

export default Card;
