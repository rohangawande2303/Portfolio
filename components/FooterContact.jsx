import React from "react";
import { motion } from "framer-motion";

const FooterContact = ({ openContact }) => {
    return (
        <footer id="footer-contact" className="w-full bg-white text-black pt-24 pb-12 px-6 md:px-12 border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh]">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Headline */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                            Let's talk about your project and make something really great out of it!
                        </h2>
                    </div>

                    {/* Contact Details & Button */}
                    <div className="flex flex-col gap-8 md:items-end">
                        <button
                            onClick={openContact}
                            className="btn-hover-fill px-8 py-4 bg-[#f0f0f0] text-black text-lg font-bold rounded-lg transition-all mb-8"
                        >
                            Start project
                        </button>

                        <div className="space-y-2">
                            <p className="text-gray-500 uppercase text-sm tracking-wider">Phone</p>
                            <p className="text-xl font-medium">+91 9967653844</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 uppercase text-sm tracking-wider">Email</p>
                            <a href="mailto:rohangawande2303@gmail.com" className="text-xl font-medium hover:underline">rohangawande2303@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto pt-24">

                    {/* Links Row */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 text-sm font-medium text-gray-600">
                        <div className="flex gap-8">
                            <span>© 2023</span>
                        </div>
                        <div className="flex gap-8">
                            <a href="https://wa.me/9967653844" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">WhatsApp</a>
                            <a href="https://github.com/rohangawande2303" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
                        </div>
                    </div>

                    {/* Name Reveal */}
                    <motion.div
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        <h1 className="text-[15vw] leading-none font-bold text-gray-100 text-center tracking-tighter select-none">
                            ROHAN
                        </h1>
                    </motion.div>

                </div>
            </div>
        </footer>
    );
};

export default FooterContact;
