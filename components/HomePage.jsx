"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  const handleConnect = () => {
    const phoneNumber = "9967653844"; // Replace with your actual WhatsApp number
    const message = "Hi! I'd like to connect with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume URL or file path
    const resumeUrl = "/path/to/your/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rohan_Gawande_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-black flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Profile Image */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              {/* Replace this div with your actual image */}
              <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-500 dark:from-gray-700 dark:to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                RG
              </div>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-2xl text-gray-600 dark:text-gray-400 mb-2 flex items-center justify-center gap-2">
            Hi! I&apos;m Rohan Gawande
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer
          <br />
          based in India.
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I am a Full Stack developer from Mumbai, India with 3+ years of
          experience in multiple technologies like React, Next.js, MERN.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={handleConnect}
            className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            connect with me
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>

          {/* <motion.button
            onClick={handleDownloadResume}
            className="inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            my resume
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </motion.button> */}
        </motion.div>

        
      </div>
    </div>
  );
};

export default HomePage;
