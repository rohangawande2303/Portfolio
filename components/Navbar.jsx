"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const navLinks = [
  { id: 1, link: "home" },
  { id: 2, link: "portfolio" },
  { id: 3, link: "experience" },
  { id: 4, link: "about" },
  { id: 5, link: "contact" },
];

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection("home");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map(({ link }) => document.getElementById(link))
        .filter(Boolean);

      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-screen-xl">
      <div className="backdrop-blur-md bg-white/75 supports-[backdrop-filter]:bg-white/30 rounded-full px-8 border border-gray-200">
        <div className="mx-auto py-4 flex justify-between items-center">
          <Link href="/#home" onClick={scrollToTop}>
            <h1 className="text-2xl lg:text-3xl font-bold uppercase cursor-pointer">
              Rohan
            </h1>
          </Link>
          <div className="md:hidden">
            {navigation ? (
              <FaTimes
                size={30}
                className="cursor-pointer"
                onClick={() => setNavigation(false)}
              />
            ) : (
              <FaBars
                size={30}
                className="cursor-pointer"
                onClick={() => setNavigation(true)}
              />
            )}
          </div>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ id, link }) => (
              <li
                key={id}
                className={`text-sm font-semibold uppercase hover:text-gray-600 transition-colors relative ${
                  activeSection === link ? "text-blue-600" : ""
                }`}
              >
                {link === "home" ? (
                  <Link href="/#home" onClick={scrollToTop}>
                    {link}
                  </Link>
                ) : (
                  <Link href={`/#${link}`}>{link}</Link>
                )}
                {activeSection === link && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navigation && (
        <div className="md:hidden mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-2xl">
          <ul className="text-2xl uppercase">
            {navLinks.map(({ id, link }) => (
              <li
                key={id}
                className={`py-2 ${
                  activeSection === link
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
                onClick={() => {
                  setNavigation(false);
                  if (link === "home") scrollToTop(event);
                }}
              >
                <Link href={`/#${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            <div className="flex gap-6">
              <FaLinkedin size={25} />
              <FaTwitter size={25} />
              <FaFacebook size={25} />
              <FaGithub size={25} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
