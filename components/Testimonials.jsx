import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        text: "Rohan was truly one of the most pleasant experiences I've ever had on a project. Totally uncomplicated, super reliable, and easy to work with. He developed the mockup for my landing page completely independently. Quickly, thoughtfully, and with a really good eye for detail.",
        name: "Simo Azzaoui",
        role: "Creator, Meet your Mentor",
        image: "/assets/portfolio/installNode.jpg", // Placeholder, user can replace
    },
    {
        id: 2,
        text: "Working with Rohan was a game-changer for our business. He understood our vision immediately and delivered a website that exceeded our expectations. His technical skills are top-notch, but it's his creativity that really sets him apart.",
        name: "Sarah Jenkins",
        role: "CEO, TechStart",
        image: "/assets/portfolio/reactWeather.jpg", // Placeholder
    },
    {
        id: 3,
        text: "I was impressed by Rohan's ability to translate complex requirements into a simple, elegant user interface. He is a true professional who cares deeply about the quality of his work. I would recommend him to anyone looking for a top-tier developer.",
        name: "David Chen",
        role: "Product Manager, Innovate",
        image: "/assets/portfolio/usestate.jpg", // Placeholder
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
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            layout="fill"
                                            objectFit="cover"
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
