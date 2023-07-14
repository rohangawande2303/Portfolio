import React from "react";
import { MdExpandMore } from "react-icons/md";
import Netflix from "../public/assets/portfolio/Netflix-clone.jpg";
import Ecommerce from "../public/assets/portfolio/E-commerce.jpg";
import Linkedin from "../public/assets/portfolio/linkedin-clone.jpg";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";

import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "netflix app",
      imageSrc: Netflix,
      url: "netflix-app",
    },
    {
      id: 2,
      title: "e-commerce app",
      imageSrc: Ecommerce,
      url: "e-commerce-app",
    },
    {
      id: 3,
      title: "linkedin clone app",
      imageSrc: Linkedin,
      url: "linkedin-clone-app",
    },
    {
      id: 4,
      title: "react weather app",
      imageSrc: reactWeather,
      url: "react-weather",
    },
  ];
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          Portfolio
        </h2>
        <p className="py-4 max-w-lg">
          The company itself is a very successful company. To whom but his
          duties, and as if he were running away from pleasures and pleasures,
          would any man give them just pleasure?
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-110 "
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              All projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
