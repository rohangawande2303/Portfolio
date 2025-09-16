"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const router = useRouter();
  const pathname = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Replace this with your actual WhatsApp number
  const whatsappNumber = "919967653844";
  const whatsappMessage =
    "Hi! I came across your website and would like to connect.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (pathname === "/" || pathname === "/home") {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#home");
    }

    setMenuOpen(false);
  };

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLogoClick}
          className="text-3xl md:text-4xl font-bold cursor-pointer"
        >
          Rohan<span className="text-pink-600">.</span>
        </a>
 
        {/* Desktop Links */}
        <div className="hidden md:flex text-xl space-x-8 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full font-bold">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#work">My work</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Toggle Dark/Light */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* ✅ Desktop Connect Button -> WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-block px-5 py-2 rounded-full border text-xl transition ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            Connect ↗
          </a>

          {/* Mobile Menu Toggle (Hamburger / X) */}
          <button
            className="md:hidden p-2 z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen transition-all duration-700 ease-in-out ${
          menuOpen
            ? darkMode
              ? "bg-black text-white translate-y-0"
              : "bg-white text-black translate-y-0"
            : "-translate-y-full"
        }`}
      >
        {/* Mobile Nav Content */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-medium">
          <button onClick={() => handleLinkClick("about")}>About</button>
          <button onClick={() => handleLinkClick("services")}>Services</button>
          <button onClick={() => handleLinkClick("work")}>My work</button>
          <button onClick={() => handleLinkClick("contact")}>Contact</button>

          {/* ✅ Mobile Connect Button -> WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className={`px-6 py-3 rounded-full border transition ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            Connect ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
