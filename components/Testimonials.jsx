import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        text: "Rohan was truly one of the most pleasant experiences I've ever had on a project. Totally uncomplicated, super reliable, and easy to work with. He developed the mockup for my landing page completely independently. Quickly, thoughtfully, and with a really good eye for detail.",
        name: "Rishabh Mishra",
        role: "CEO, Social Pulse Agency",
        image: "/assets/logos/social pulse logo .png", // Placeholder, user can replace
    },
    {
        id: 2,
        text: "Working with Rohan was a game-changer for our business. He understood our vision immediately and delivered a website that exceeded our expectations. His technical skills are top-notch, but it's his creativity that really sets him apart.",
        name: "Kailash Purohit",
        role: "CEO, KD RMC LLP",
        image: "/assets/logos/kdrmcllp.png", // Placeholder
    },
    {
        id: 3,
        text: "I was impressed by Rohan's ability to translate complex requirements into a simple, elegant user interface. He is a true professional who cares deeply about the quality of his work. I would recommend him to anyone looking for a top-tier Web-app developer.",
        name: "Prashant Patil",
        role: "CEO, Aamhi Khandeshi",
        image: "/assets/logos/aamhi-khandeshi.png", // Placeholder
    },
    {
        id: 4,
        text: "Rohan built a comprehensive multi-page website that perfectly showcased my professional presence and past client work. He handled everything from stunning UI/UX design and smooth animations to form integration with Google Sheets for lead generation, plus full SEO optimization to rank higher and attract new clients—all developed and deployed single-handedly. The result has been a powerful online platform driving real business growth.",
        name: "Shreyas Bhopatkar",
        role: "Founder & CEO, Beqube Consultancy",
        image: "/assets/logos/Beqube.png", // Placeholder
    },
    {
        id: 5,
        text: "Rohan delivered an impressive real estate landing page in just three days to meet our urgent needs, complete with lead generation forms integrated into Google Sheets and CRM systems. He managed the entire process solo: design, development, deployment, testing, SEO ranking for PPC and ads, plus Google Analytics tagging, leading to consistent leads and strong conversion results. His speed, expertise, and end-to-end ownership made all the difference for our marketing campaigns.",
        name: "Karishma Shah",
        role: "Marketing Head, Hubtown Group",
        image: "/assets/logos/trade-centre-logo.jpg", // Placeholder
    },
    {
        id: 6,
        text: "Rohan created a robust property listing website featuring detailed listings by location, with seamless lead capture integrated directly into Google Sheets for quick client follow-up and deal closure. This multi-page site streamlines property showcases across different areas, making it easy for us to connect with prospects and convert them effectively. His full-stack approach ensured a professional, user-friendly platform tailored precisely to our real estate needs.",
        name: "Raghav",
        role: "Founder, Aarav Realty",
        image: "/assets/logos/aarav.png", // Placeholder
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="w-full bg-white text-black py-24 px-6 md:px-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-2 mb-16">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-sm font-bold tracking-widest uppercase">Customer Testimonials</span>
                </div>

                {/* Carousel */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Content */}
                    <div className="md:col-span-8 relative min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">
                                    &ldquo;{testimonials[currentIndex].text}&ldquo;
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-200">
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                        <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="md:col-span-4 flex justify-end gap-4">
                        <button
                            onClick={handlePrev}
                            className="p-4 bg-gray-100 hover:bg-black hover:text-white transition-colors rounded-none"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-4 bg-gray-100 hover:bg-black hover:text-white transition-colors rounded-none"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;
