import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Import portfolio images
import Disney from "../public/assets/portfolio/Disney-clone.jpg.png";
import Ecommerce from "../public/assets/portfolio/E-commerce.jpg";
import foodapp from "../public/assets/portfolio/food-ordering-app.png";
import socialpulse from "../public/assets/portfolio/social-pulse-agency.png";
import RealEstate from "../public/assets/portfolio/aarav-realty.png";
import rutu from "../public/assets/portfolio/rutu-group.png";
import realestate2 from "../public/assets/portfolio/trade-centre.png";
import Beqube from "../public/assets/portfolio/beqube.png";
import KD from "../public/assets/portfolio/kd-rmc-llp.png";

const portfolios = [
  {
    id: 1,
    title: "Disney Clone",
    subtitle: "Streaming Platform Clone",
    imageSrc: Disney,
    url: "disney-app",
  },
  {
    id: 2,
    title: "e-commerce app",
    subtitle: "Online Furniture Store",
    imageSrc: Ecommerce,
    url: "e-commerce-app",
  },
  {
    id: 3,
    title: "Food ordering app",
    subtitle: "Food Delivery Platform",
    imageSrc: foodapp,
    url: "food-ordering-app",
  },
  {
    id: 4,
    title: "digital marketing app",
    subtitle: "Agency Website & Lead Gen",
    imageSrc: socialpulse,
    url: "social-pulse-agency",
  },
  {
    id: 5,
    title: "Real Estate app",
    subtitle: "Property Listing Platform",
    imageSrc: RealEstate,
    url: "real-estate",
  },
  {
    id: 7,
    title: "rutu group website",
    subtitle: "Corporate Real Estate Site",
    imageSrc: rutu,
    url: "rutu-group",
  },
  {
    id: 8,
    title: "Real Estate Landing Page",
    subtitle: "Property Sales Landing Page",
    imageSrc: realestate2,
    url: "trade-centre",
  },
  {
    id: 9,
    title: "Real Estate Consultancy",
    subtitle: "Consultancy Business Site",
    imageSrc: Beqube,
    url: "beqube",
  },
  {
    id: 10,
    title: "KD RMC LLP Concreate company",
    subtitle: "Industrial Company Website",
    imageSrc: KD,
    url: "kd-rmc-llp",
  },
];

const Portfolio = () => {
  return (
    <div id="work" className="w-full bg-white text-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-2 mb-16">
          <div className="w-2 h-2 bg-black rounded-full" />
          <span className="text-sm font-bold tracking-widest uppercase">Projects</span>
        </div>

        {/* Grid - 3x3 for desktop, responsive for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map(({ id, title, subtitle, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="cursor-pointer group"
              >
                {/* Image Container - Smaller size */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-4 rounded-lg">
                  <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-lg font-medium capitalize group-hover:underline underline-offset-4 decoration-1">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm">{subtitle}</p>
                </div>

              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
          <Link href="/portfolio">
            <button className="btn-hover-fill px-8 py-4 bg-[#f0f0f0] text-black text-lg font-bold rounded-lg transition-all">
              View All Projects
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
