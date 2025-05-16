import React from "react";
import ProjectCard from "./ProjectCard";
import { assets } from "../assets/assets";
const projects = [
  {
    image: assets.blog,
    heading: "Blogging",
    link1: "https://github.com/Arpit7979/blogging",
    link2: "https://blogging-henna.vercel.app/",
  },
  {
    image: assets.course,
    heading: "Ark-Courses",
    link1: "https://github.com/Arpit7979/ark-course",
    link2: "https://ark-course-rgc9.vercel.app/",
  },
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
      <div className="bg-slate-900 flex flex-col items-center md:p-20 p-1 md:pt-0 pt-14">
        <h1 className="md:text-5xl text-3xl font-bold text-[#ffde59] md:mb-13 mb-5">
          PROJECTS
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
