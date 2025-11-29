import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import FooterContact from "./FooterContact";

const ServicePageLayout = ({ title, description, sequence, projects, openContact }) => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar openContact={openContact} />

            {/* Hero Section */}
            <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-8"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed"
                >
                    {description}
                </motion.p>
            </div>

            {/* Sequence Section */}
            <div className="py-24 px-6 md:px-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <span className="text-sm font-bold tracking-widest uppercase">Sequence</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium max-w-2xl leading-tight">
                            To ensure you know exactly how a project proceeds with me, here is an overview of all the important phases.
                        </h2>
                    </div>

                    <div className="space-y-12">
                        {sequence.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-gray-800 pt-12"
                            >
                                <div className="md:col-span-2">
                                    <span className="text-2xl font-light text-gray-500">0{index + 1}.</span>
                                </div>
                                <div className="md:col-span-4">
                                    <h3 className="text-2xl font-medium">{step.title}</h3>
                                </div>
                                <div className="md:col-span-6">
                                    <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            {projects && projects.length > 0 && (
                <div className="py-24 px-6 md:px-12 bg-white text-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-16">
                            <div className="w-2 h-2 bg-black rounded-full" />
                            <span className="text-sm font-bold tracking-widest uppercase">Selected Projects</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <Link key={project.id} href={`/portfolio/${project.url}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="cursor-pointer group"
                                    >
                                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-4 rounded-lg">
                                            {project.imageSrc ? (
                                                <Image
                                                    src={project.imageSrc}
                                                    alt={project.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="group-hover:scale-105 transition-transform duration-500 ease-out"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 font-medium">
                                                    Coming Soon
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-medium capitalize group-hover:underline underline-offset-4 decoration-1">
                                            {project.title}
                                        </h3>
                                        {project.subtitle && (
                                            <p className="text-gray-500 text-sm mt-1">{project.subtitle}</p>
                                        )}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <FooterContact />
        </div>
    );
};

export default ServicePageLayout;
