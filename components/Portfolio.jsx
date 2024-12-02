import React from "react";
import { MdExpandMore } from "react-icons/md";
import Netflix from "../public/assets/portfolio/Netflix-clone.jpg";
import Ecommerce from "../public/assets/portfolio/E-commerce.jpg";
// import Linkedin from "../public/assets/portfolio/linkedin-clone.jpg";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";
import Disney from "../public/assets/portfolio/Disney-clone.jpg.png";
import socialpulse from "../public/assets/portfolio/social-pulse-agency.png";
import foodapp from "../public/assets/portfolio/food-ordering-app.png";
import RealEstate from "../public/assets/portfolio/aarav-realty.png";

import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 4,
      title: "digital marketing app",
      imageSrc: socialpulse,
      url: "social-pulse-agency",
    },
    {
      id: 5,
      title: "Real Estate app",
      imageSrc: RealEstate,
      url: "real-estate",
    },
    {
      id: 1,
      title: "Disney-clone app",
      imageSrc: Disney,
      url: "disney-app",
    },
    {
      id: 2,
      title: "e-commerce app",
      imageSrc: Ecommerce,
      url: "e-commerce-app",
    },
    {
      id: 3,
      title: "Food ordering app",
      imageSrc: foodapp,
      url: "food-ordering-app",
    },
  ];
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          Portfolio
        </h2>
        <p className="py-4 max-w-lg">
          This are some of my Projects that I have made using React, Nextjs and
          other technology
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
