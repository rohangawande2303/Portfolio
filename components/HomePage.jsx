"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const HomePage = ({ openContact }) => {
  return (
    <div
      id="home"
      className="
        min-h-screen 
        flex 
        flex-col 
        justify-between 
        relative 
        overflow-hidden 
        px-6 md:px-12 
        bg-[#1a1a1a] 
        pt-20 md:pt-60
      "
    >
      {/* Background Gradient Spot */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* TOP EMPTY SPACE (for the logo area) */}
      <div className="h-[120px] md:h-[0px]" />

      {/* BOTTOM CONTENT WRAPPER — THIS PUSHES CONTENT TO BOTTOM */}
      <div className="max-w-7xl w-full mx-auto relative z-10 mt-auto pb-16">

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-24">

          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[46px] sm:text-[52px] md:text-8xl lg:text-9xl font-bold text-white leading-[1.05] tracking-tight">
              Full stack <br /> freelancer
            </h1>
          </motion.div>

          {/* Right: Globe + Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 text-white mt-4 md:mt-0"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Globe size={22} strokeWidth={1.4} />
            </motion.div>
            <span className="text-lg font-medium">Mumbai</span>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="h-px w-full bg-gray-700 origin-left my-6 md:my-16"
        />

        {/* Subtext + Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[18px] md:text-xl text-gray-400 font-light max-w-md"
          >
            I'll help you make a lasting impression online.
          </motion.p>

          <motion.button
            onClick={openContact}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl font-medium text-white hover:text-gray-300 transition-colors"
          >
            Start project
          </motion.button>

        </div>

      </div>
    </div>
  );
};

export default HomePage;
