import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = ({ openContact }) => {
  return (
    <div id="about" className="w-full bg-white text-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Left Column: Label & Image */}
          <div className="md:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-sm font-bold tracking-widest uppercase">About Me</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative w-full aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden"
            >
              <Image
                src="/assets/rohan-banner.png"
                alt="Rohan Gawande"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="md:col-span-7 space-y-12 pt-0 md:pt-20">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                Hi, I&apos;m Rohan. <br />
                <span className="text-gray-500">Full Stack Developer from Mumbai.</span>
              </h2>
            </motion.div>

            {/* Description with Scroll Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                I&apos;m Rohan, a 24-year-old self-taught programmer and designer from Mumbai specializing in full stack web development, web apps, and UI/UX design. With hands-on experience across projects for startups and established companies, I&apos;ve managed everything from client requirements and analysis through design, coding, testing, and deployment. Every live project in my portfolio is built end-to-end by me, ensuring top quality and a smooth process from start to finish.
              </p>
            </motion.div>

            {/* Start Project Button */}
            <motion.button
              onClick={openContact}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="btn-hover-fill px-8 py-4 bg-[#f0f0f0] text-black text-lg font-bold rounded-lg transition-all"
            >
              Start project
            </motion.button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
