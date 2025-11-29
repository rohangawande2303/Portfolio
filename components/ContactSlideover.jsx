import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle } from "lucide-react";

const ContactSlideover = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    // Google Apps Script URL
    const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbyefKfO-DfucLmJlHw9rTTzef0hHtt_e4aqIc3gOhEp-4fR5YA4Uj9oHTGEm66B_hWQ/exec";

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("");

        const submitData = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            countryCode: "+91",
            phone: formData.phone || "Not provided",
        };

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(submitData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => {
                    setSubmitStatus("");
                    onClose();
                }, 3000);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
                    />

                    {/* Slide-over Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white border-l border-gray-200 z-[70] shadow-2xl overflow-y-auto text-black"
                    >
                        <div className="p-8 md:p-12 h-full flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-12">
                                <h2 className="text-3xl font-bold">Let&apos;s talk.</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="What's your name?"
                                        className="w-full bg-transparent border-b border-gray-300 py-4 text-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your email address"
                                        className="w-full bg-transparent border-b border-gray-300 py-4 text-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your phone number"
                                        className="w-full bg-transparent border-b border-gray-300 py-4 text-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-transparent border-b border-gray-300 py-4 text-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                                    />
                                </div>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
                                        <CheckCircle size={20} />
                                        <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
                                        <AlertCircle size={20} />
                                        <span>Something went wrong. Please try again.</span>
                                    </div>
                                )}

                                <div className="mt-auto pt-8">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-hover-fill w-full py-4 bg-[#f0f0f0] text-black font-bold text-lg rounded-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactSlideover;
