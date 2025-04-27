import React from "react";
import ProjectCard from "./ProjectCard";
import { assets } from "../assets/assets";
const projects = [
  {
    image: assets.arkshop,
    heading: "E-commerce",
    link1: "https://github.com/Arpit7979/redux-ecommerce-v2",
    link2: "https://arkshopv2.vercel.app/",
  },
  {
    image: assets.auth,
    heading: "MERN-Auth",
    link1: "https://github.com/Arpit7979/MERN-auth",
    link2: "https://mern-auth-v2-five.vercel.app/",
  },
];

const Projects = ({ projectRef }) => {
  return (
    <section ref={projectRef}>
      <div className="bg-slate-900 flex flex-col items-center p-20">
        <h1 className="md:text-5xl text-3xl font-bold text-[#ffde59] mb-13">
          PROJECTS
        </h1>
        <div className="flex md:flex-row flex-col gap-5">
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
