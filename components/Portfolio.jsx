import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Netflix from "../public/assets/portfolio/Netflix-clone.jpg";
import Ecommerce from "../public/assets/portfolio/E-commerce.jpg";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";
import Disney from "../public/assets/portfolio/Disney-clone.jpg.png";
import socialpulse from "../public/assets/portfolio/social-pulse-agency.png";
import foodapp from "../public/assets/portfolio/food-ordering-app.png";
import RealEstate from "../public/assets/portfolio/aarav-realty.png";
import rutu from "../public/assets/portfolio/rutu-group.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 4,
      title: "Digital Marketing App",
      category: "web design",
      imageSrc: socialpulse,
      url: "social-pulse-agency",
    },
    {
      id: 3,
      title: "Food Ordering App",
      category: "Web app",
      imageSrc: foodapp,
      url: "food-ordering-app",
    },
    {
      id: 7,
      title: "Rutu Group Website",
      category: "web design",
      imageSrc: rutu,
      url: "rutu-group",
    },
    {
      id: 5,
      title: "Real Estate App",
      category: "Web design",
      imageSrc: RealEstate,
      url: "real-estate",
    },
    {
      id: 1,
      title: "Disney-clone App",
      category: "web design",
      imageSrc: Disney,
      url: "disney-app",
    },
    {
      id: 2,
      title: "E-commerce App",
      category: "Web app",
      imageSrc: Ecommerce,
      url: "e-commerce-app",
    },
  ];

  return (
    <section
      id="work"
      className="w-full py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          My portfolio
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          My latest work
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in Full Stack development.
        </p>

        {/* Portfolio Grid */} 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios
            .slice(0, 6) 
            .map(({ id, title, category, imageSrc, url }) => (
              <Link key={id} href={`/portfolio/${url}`}>
                <div
                  className="group relative overflow-hidden rounded-lg cursor-pointer 
                  bg-gradient-to-br from-blue-500/20 via-transparent to-blue-600/20
                  border border-blue-500/30
                  shadow-[0_0_20px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]
                  hover:border-blue-400/50
                  transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(59,130,246,0.1), rgba(147,197,253,0.05), rgba(59,130,246,0.1))",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={title}
                    className="object-cover w-full h-64 group-hover:scale-105 duration-300"
                  />
                  {/* Card Overlay */}
                  <div
                    className="absolute bottom-4 left-4 right-4 
                    rounded-md px-4 py-3 flex items-center justify-between 
                    bg-white/90 dark:bg-neutral-900/90 transition duration-300"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-800 dark:text-gray-500">
                        {category}
                      </p>
                    </div>
                    <span
                      className="p-2 rounded-full border border-gray-400 dark:border-gray-600 
                      group-hover:bg-gray-100 dark:group-hover:bg-neutral-800 
                      group-hover:border-transparent text-gray-700 dark:text-gray-200 transition"
                    >
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/portfolio">
            <button
              className="flex items-center gap-2 px-6 py-3 border rounded-full font-semi-bold 
              text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-600 
              dark:hover:bg-neutral-800 transition"
            >
              Show more →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
