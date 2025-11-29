import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Design",
    services: [
      "UI/UX Design",
      "Digital Ads Creatives",
      "Posters",
      "Billboard Hoardings"
    ],
    description: "Crafting impactful visuals and user-focused designs that bring your brand to life. From intuitive UI/UX to compelling digital creatives, posters, and billboard hoardings — every design tells your brand’s story with clarity and style.",
    link: "/services/web-design"
  },
  {
    id: 2,
    title: "AI Products",
    services: [
      "AI Chatbots",
      "Voice AI Agents",
      "WhatsApp Chatbots",
      "Custom AI Agents"
    ],
    description: "Developing intelligent AI solutions that enhance engagement and automate workflows. From custom chatbots and voice agents to smart WhatsApp assistants — each product makes digital experiences faster and smarter.",
    link: "/services/ai"
  },
  {
    id: 3,
    title: "Web Apps",
    services: [
      "E-commerce Stores",
      "Landing Pages",
      "Multi-page Websites"
    ],
    description: "Building high-quality web applications that perform seamlessly across all devices. Whether it’s an e-commerce store, business landing page, or multi-page website — each project delivers performance, scalability, and exceptional user experience.",
    link: "/services/web-app"
  },
  {
    id: 4,
    title: "Software Products",
    services: [
      "Real Estate CRM",
      "Appointment Booking",
      "Custom Mobile Apps"
    ],
    description: "Creating reliable, scalable software for modern businesses. From CRM systems for real estate teams to appointment booking tools and mobile apps — these solutions simplify operations and drive growth.",
    link: "/services/software"
  }
];

const Services = () => {
  return (
    <div id="services" className="w-full text-white py-24 px-6 md:px-12" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-2 mb-16">
          <div className="w-2 h-2 bg-white rounded-full" />
          <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Services</span>
        </div>

        {/* List Layout */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-t border-gray-800 py-12 hover:bg-white/5 transition-colors duration-500"
            >
              <Link href={service.link}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 cursor-pointer">

                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-3xl md:text-4xl font-light text-gray-600 group-hover:text-white transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Sub-services */}
                  <div className="md:col-span-5 space-y-6">
                    <h3 className="text-3xl md:text-5xl font-medium group-hover:translate-x-4 transition-transform duration-500">
                      {service.title}
                    </h3>
                    {/* Sub-services List */}
                    <div className="flex flex-wrap gap-2 group-hover:translate-x-4 transition-transform duration-500 delay-75">
                      {service.services.map((sub, i) => (
                        <span key={i} className="text-sm text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-6 flex items-center">
                    <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
          {/* Bottom Border */}
          <div className="border-t border-gray-800" />
        </div>

      </div>
    </div>
  );
};

export default Services;
