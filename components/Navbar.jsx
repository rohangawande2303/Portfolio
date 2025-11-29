"use client";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ openContact, theme = "dark" }) {
  const router = useRouter();
  const pathname = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname === "/" || pathname === "/home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
    setMenuOpen(false);
  };

  const handleLinkClick = (id) => {
    if (id === "contact") {
      // Scroll to footer contact
      const footer = document.getElementById("footer-contact");
      if (footer) footer.scrollIntoView({ behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // Determine text color based on theme and scroll state
  // If scrolled, always white (because bg is black)
  // If not scrolled:
  //   - theme="dark" (default, like home): text is white
  //   - theme="light" (like portfolio): text is black
  const isTextDark = theme === "light" && !scrolled;
  const textColorClass = isTextDark ? "text-black" : "text-white";
  const linkColorClass = isTextDark ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white";
  const mobileMenuButtonClass = isTextDark ? "text-black" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick}>
            <FlipLink className="text-white !uppercase !text-xl md:!text-2xl !font-medium">
              Rohan
            </FlipLink>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <FlipLink onClick={() => handleLinkClick("about")} className={linkColorClass}>About me</FlipLink>
            <FlipLink onClick={() => handleLinkClick("work")} className={linkColorClass}>Projects</FlipLink>
            <FlipLink onClick={() => handleLinkClick("services")} className={linkColorClass}>Services</FlipLink>
            <FlipLink onClick={() => handleLinkClick("contact")} className={linkColorClass}>Contact</FlipLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 relative transition-colors ${mobileMenuButtonClass}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} className={scrolled || menuOpen ? "text-white" : mobileMenuButtonClass} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-[60] transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="absolute top-6 right-6">
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={() => handleLinkClick("about")}
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
          >
            About me
          </button>
          <button
            onClick={() => handleLinkClick("work")}
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => handleLinkClick("services")}
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => handleLinkClick("contact")}
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
          >
            contact
          </button>
        </div>
      </div>
    </>
  );
}

const FlipLink = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative block overflow-hidden whitespace-nowrap text-sm font-medium uppercase tracking-wide transition-colors ${className}`}
    >
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block"
      >
        <motion.span
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block"
        >
          {children}
        </motion.span>
        <motion.span
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 block"
        >
          {children}
        </motion.span>
      </motion.div>
    </button>
  );
};
