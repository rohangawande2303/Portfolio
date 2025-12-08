import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import FooterContact from "../../components/FooterContact";

// Import portfolio images
import Disney from "../../public/assets/portfolio/Disney-clone.jpg.png";
import Ecommerce from "../../public/assets/portfolio/E-commerce.jpg";
import foodapp from "../../public/assets/portfolio/food-ordering-app.png";
import socialpulse from "../../public/assets/portfolio/social-pulse-agency.png";
import RealEstate from "../../public/assets/portfolio/aarav-realty.png";
import rutu from "../../public/assets/portfolio/rutu-group.png";
import realestate2 from "../../public/assets/portfolio/trade-centre.png";
import Beqube from "../../public/assets/portfolio/beqube.png";
import KD from "../../public/assets/portfolio/kd-rmc-llp.png";

export const getStaticProps = async () => {
  const portfolios = [
    { id: 1, title: "Disney Clone", subtitle: "Streaming Platform Clone", imageSrc: Disney, url: "disney-app" },
    { id: 2, title: "e-commerce app", subtitle: "Online Furniture Store", imageSrc: Ecommerce, url: "e-commerce-app" },
    { id: 3, title: "Food ordering app", subtitle: "Food Delivery Platform", imageSrc: foodapp, url: "food-ordering-app" },
    { id: 4, title: "digital marketing app", subtitle: "Agency Website & Lead Gen", imageSrc: socialpulse, url: "social-pulse-agency" },
    { id: 5, title: "Real Estate app", subtitle: "Property Listing Platform", imageSrc: RealEstate, url: "real-estate" },
    { id: 7, title: "rutu group website", subtitle: "Corporate Real Estate Site", imageSrc: rutu, url: "rutu-group" },
    { id: 8, title: "Real Estate Landing Page", subtitle: "Property Sales Landing Page", imageSrc: realestate2, url: "trade-centre" },
    { id: 9, title: "Real Estate Consultancy", subtitle: "Consultancy Business Site", imageSrc: Beqube, url: "beqube" },
    { id: 10, title: "KD RMC LLP Concreate company", subtitle: "Industrial Company Website", imageSrc: KD, url: "kd-rmc-llp" },
  ];
  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios, openContact }) => {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar openContact={openContact} theme="light" />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          All Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed"
        >
          A collection of my work across web development, design, and software solutions.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map(({ id, title, subtitle, imageSrc, url }) => (
              <Link key={id} href={`/portfolio/${url}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="cursor-pointer group"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-4 rounded-lg">
                    <Image
                      src={imageSrc}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
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
        </div>
      </div>

      <FooterContact openContact={openContact} />
    </div>
  );
};

export default PortfoliosRoute;