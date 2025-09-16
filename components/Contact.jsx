import Image from "next/image";
import React, { useState } from "react";
import contactus from "../public/assets/contact-us.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91", // Default to India
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Add your Google Apps Script web app URL here
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyefKfO-DfucLmJlHw9rTTzef0hHtt_e4aqIc3gOhEp-4fR5YA4Uj9oHTGEm66B_hWQ/exec";

  // Common country codes
  const countryCodes = [
    { code: "+1", country: "US/CA", flag: "🇺🇸" },
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+82", country: "S. Korea", flag: "🇰🇷" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+966", country: "Saudi", flag: "🇸🇦" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
  ];

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
      countryCode: formData.countryCode, // send code separately
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
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
        setFormData({
          name: "",
          countryCode: "+91",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <div id="contact" className="w-full bg-white dark:bg-black">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center">
         <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
                  Contact
                </h2>

        {/* Full Section Box */}
        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white dark:bg-black mt-4 rounded-xl">
          {/* Left Section */}
          <div className="w-full md:w-1/2 rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8 text-gray-700 dark:text-gray-300">
              I am open to talk regarding freelancing or full-time
              opportunities. Feel free to contact me using your preferred
              medium.
            </p>

            {/* Social Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-white dark:bg-gray-800">
                <a
                  href="https://www.linkedin.com/in/rohan-gawande-5821b1145/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-800 dark:text-gray-200"
                >
                  <FaLinkedin size={25} />
                </a>
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                <FaFacebook size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-white dark:bg-gray-800">
                <a
                  href="https://github.com/rohangawande2303"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-800 dark:text-gray-200"
                >
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full md:w-1/2 rounded-xl p-4">
            <div className="p-4 text-left">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <label className="capitalize text-base text-slate-600 dark:text-slate-300 font-semibold">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </label>

                <label className="capitalize text-base text-slate-600 dark:text-slate-300 font-semibold">
                  Phone
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="border-2 rounded-lg p-3 focus:outline-none border-blue-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-w-[90px]"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                </label>

                <label className="capitalize text-base text-slate-600 dark:text-slate-300 font-semibold">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </label>
                <label className="capitalize text-base text-slate-600 dark:text-slate-300 font-semibold">
                  Message
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  ></textarea>
                </label>

                {/* Enhanced Status Message */}
                {submitStatus && (
                  <div className="flex items-center justify-center">
                    {submitStatus === "success" ? (
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl shadow-lg animate-pulse">
                        <div className="flex-shrink-0">
                          <FaCheckCircle className="text-green-500 text-2xl" />
                        </div>
                        <div>
                          <h3 className="text-green-800 dark:text-green-300 font-semibold text-lg">
                            Message Sent Successfully! 🎉
                          </h3>
                          <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                            Thank you for reaching out. I&apos;ll get back to
                            you soon!
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-200 dark:border-red-700 rounded-xl shadow-lg">
                        <div className="flex-shrink-0">
                          <FaTimesCircle className="text-red-500 text-2xl" />
                        </div>
                        <div>
                          <h3 className="text-red-800 dark:text-red-300 font-semibold text-lg">
                            Message Failed to Send
                          </h3>
                          <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                            Please try again or contact me directly via social
                            media.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
                  >
                    {isSubmitting && (
                      <div className="absolute inset-0 bg-blue-400 animate-pulse"></div>
                    )}
                    <span className="relative">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
