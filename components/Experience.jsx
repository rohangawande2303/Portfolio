import React from "react";
import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import react from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/tailwind.png";
import github from "../public/assets/experience/github.png";
import node from "../public/assets/experience/node.png";
import Image from "next/image";
import redux from "../public/assets/experience/redux.webp";
import typescript from "../public/assets/experience/typescript.webp";
import uiux from "../public/assets/experience/uiux.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: react,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "Github",
      src: github,
    },
    {
      id: 8,
      title: "Node js",
      src: node,
    },
    {
      id: 9,
      title: "Redux",
      src: redux,
    },
    {
      id: 10,
      title: "TypeScript",
      src: typescript,
    },
    {
      id: 11,
      title: "UI/UX",
      src: uiux,
    },
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          Experience
        </h2>
        <p className="py-4 max-w-lg">
          This are some Technologys that I have used and made projects and have
          some Understanding of.
        </p>
        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
