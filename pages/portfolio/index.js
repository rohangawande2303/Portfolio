import React from "react";
// import { MdExpandMore } from "react-icons/md";
import Netflix from "../../public/assets/portfolio/Netflix-clone.jpg";
import Disney from "../../public/assets/portfolio/Disney-clone.jpg.png";
import Ecommerce from "../../public/assets/portfolio/E-commerce.jpg";
import socialpulse from "../../public/assets/portfolio/social-pulse-agency.png";
// import Linkedin from "../../public/assets/portfolio/linkedin-clone.jpg";
import reactWeather from "../../public/assets/portfolio/reactWeather.jpg";
import arrayDestruct from "../../public/assets/portfolio/arrayDestruct.jpg";
import foodapp from "../../public/assets/portfolio/food-ordering-app.png";
import RealEstate from "../../public/assets/portfolio/aarav-realty.png";
import rutu from "../../public/assets/portfolio/rutu-group.png";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const portfolios = [
    {
      id: 1,
      title: "Disney Clone",
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
      id: 6,
      title: "react weather app",
      imageSrc: reactWeather,
      url: "react-weather",
    },
    {
      id: 7,
      title: "rutu group website",
      imageSrc: rutu,
      url: "rutu-group",
    },
  ];
  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          Portfolio
        </h2>

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
      </div>
    </div>
  );
};

export default PortfoliosRoute;
