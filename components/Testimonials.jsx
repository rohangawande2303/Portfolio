import React from "react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        text: "Rohan was truly one of the most pleasant experiences I've ever had on a project. Totally uncomplicated, super reliable, and easy to work with. He developed the mockup for my landing page completely independently. Quickly, thoughtfully, and with a really good eye for detail.",
        name: "Rishabh Mishra",
        role: "CEO, Social Pulse Agency",
        image: "/assets/logos/social pulse logo .png",
    },
    {
        id: 2,
        text: "Working with Rohan was a game-changer for our business. He understood our vision immediately and delivered a website that exceeded our expectations. His technical skills are top-notch, but it's his creativity that really sets him apart.",
        name: "Kailash Purohit",
        role: "CEO, KD RMC LLP",
        image: "/assets/logos/kdrmcllp.png",
    },
    {
        id: 3,
        text: "I was impressed by Rohan's ability to translate complex requirements into a simple, elegant user interface. He is a true professional who cares deeply about the quality of his work. I would recommend him to anyone looking for a top-tier Web-app developer.",
        name: "Prashant Patil",
        role: "CEO, Aamhi Khandeshi",
        image: "/assets/logos/aamhi-khandeshi.png",
    },
    {
        id: 4,
        text: "Rohan built a comprehensive multi-page website that perfectly showcased my professional presence and past client work. He handled everything from stunning UI/UX design and smooth animations to form integration with Google Sheets for lead generation, plus full SEO optimization to rank higher and attract new clients—all developed and deployed single-handedly. The result has been a powerful online platform driving real business growth.",
        name: "Shreyas Bhopatkar",
        role: "Founder & CEO, Beqube Consultancy",
        image: "/assets/logos/Beqube.png",
    },
    {
        id: 5,
        text: "Rohan delivered an impressive real estate landing page in just three days to meet our urgent needs, complete with lead generation forms integrated into Google Sheets and CRM systems. He managed the entire process solo: design, development, deployment, testing, SEO ranking for PPC and ads, plus Google Analytics tagging, leading to consistent leads and strong conversion results. His speed, expertise, and end-to-end ownership made all the difference for our marketing campaigns.",
        name: "Karishma Shah",
        role: "Marketing Head, Hubtown Group",
        image: "/assets/logos/trade-centre-logo.jpg",
    },
    {
        id: 6,
        text: "Rohan created a robust property listing website featuring detailed listings by location, with seamless lead capture integrated directly into Google Sheets for quick client follow-up and deal closure. This multi-page site streamlines property showcases across different areas, making it easy for us to connect with prospects and convert them effectively. His full-stack approach ensured a professional, user-friendly platform tailored precisely to our real estate needs.",
        name: "Raghav",
        role: "Founder, Aarav Realty",
        image: "/assets/logos/aarav.png",
    },
];

const Testimonials = () => {
    return (
        <div className="w-full bg-white text-black py-16 px-6 md:px-12 lg:px-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-2 mb-12">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-sm font-bold tracking-widest uppercase">
                        Customer Testimonials
                    </span>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Name, Role and Logo */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-black mb-2">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-500 text-base">{testimonial.role}</p>
                                </div>

                                {/* Logo at top right */}
                                <div className="ml-4">
                                    <div className="relative w-16 h-16 bg-white rounded overflow-hidden flex-shrink-0">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 text-base leading-relaxed">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;