import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const { image, heading, link1, link2 } = project;

  const [isOpen, setIsOpen] = useState(false);
  const handleImagePopup = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:w-100 md:h-90 w-80 rounded-lg bg-slate-800 flex flex-col items-center p-10 shadow-xl/100 inset-shadow-sm inset-shadow-indigo-100">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          onClick={handleImagePopup}
          className="w-full rounded-lg shadow-xl/100"
          src={image}
          alt=""
        />
      </div>
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 backdrop-blur-sm"
        >
          <img src={image} alt="" className="md:h-[80%] h-[30%] rounded-lg" />
        </div>
      )}
      <h3 className="font-semibold text-lg p-5 text-white">{heading}</h3>
      <div className="flex justify-between w-full">
        <a href={link1} target="_blank">
          <button className="bg-[#ffde59] p-1 px-3 rounded-full cursor-pointer border-1 border-black text-black">
            GitHub
          </button>
        </a>
        <a href={link2} target="_blank">
          <button className="bg-[#ffde59] p-1 px-3 rounded-full cursor-pointer border-1 border-black text-black">
            Live Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
