import React from "react";

const Card = ({ name }) => {
  return (
    <div className="w-50 h-50 bg-slate-800 flex items-center justify-center border-2 rounded-lg border-black shadow-xl/100 inset-shadow-sm inset-shadow-indigo-100">
      <img className="w-20" src={name} alt="" />
    </div>
  );
};

export default Card;
