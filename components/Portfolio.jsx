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
    id: 4,
    title: "digital marketing app",
    subtitle: "Agency Website & Lead Gen",
    imageSrc: socialpulse,
    url: "social-pulse-agency",
  },
  {
    id: 3,
    title: "Food ordering app",
    subtitle: "Food Delivery Platform",
    imageSrc: foodapp,
    url: "food-ordering-app",
  },
  {
    id: 2,
    title: "e-commerce app",
    subtitle: "Online Furniture Store",
    imageSrc: Ecommerce,
    url: "e-commerce-app",
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
  {
    id: 1,
    title: "Disney Clone",
    subtitle: "Streaming Platform Clone",
    imageSrc: Disney,
    url: "disney-app",
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
                transition={{ duration: 0.5 }}
                className="cursor-pointer group"
              >
                {/* Image Container with Overlay */}
                <div className="relative w-full overflow-hidden mb-4 rounded-lg bg-gray-50">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={imageSrc}
                      alt={title}
                      layout="fill"
                      objectFit="contain"
                      className="transition-all duration-500 ease-out group-hover:brightness-75"
                    />

                    {/* Gradient Overlay - appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* View Project text - appears on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-white font-medium text-sm tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-lg font-medium capitalize group-hover:translate-x-1 transition-transform duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {subtitle}
                  </p>
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