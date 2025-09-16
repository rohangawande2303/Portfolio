import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Portfolio data with descriptions formatted using <br /> for line breaks
const portfolios = [
  {
    id: "disney-app",
    title: "Disney-clone app",
    imageSrc: "/assets/portfolio/Disney-clone.jpg.png",
    url: "disney-app",
    technologies: ["React.js", "React Router", "CSS", "JavaScript"],
    desc: `• Technologies Used:  
  <br/> - React.js (for building a dynamic, component-based user interface, making the app interactive and responsive)  
  <br/> - React Router (for seamless navigation between different sections of the site, simulating the official Disney website experience)  
  <br/> - CSS (for styling the application with responsive and visually appealing designs that are mobile-friendly)   
  <br/> - JavaScript (for the core logic of interactivity and rendering dynamic content).

  <br/><br/>• Key Features & Functionality:  
  <br/> - Developed a captivating platform that faithfully replicates the magic of Disney's content delivery, bringing Disney's world to life through interactive design and smooth navigation.  
  <br/> - Incorporated an immersive user interface, inspired by Disney's enchanting world, creating a magical browsing experience for Disney enthusiasts worldwide.  
  <br/> - Leveraged React Router to handle seamless page transitions, mimicking the official Disney website's navigation and enhancing the user experience.  
  <br/> - Optimized the design for responsiveness, ensuring that the app works flawlessly on a variety of devices, from mobile phones to desktops.`,

    demo: "https://disney-clone-project.netlify.app/",
    github: "https://github.com/rohangawande2303/Disney-clone",
  },
  {
    id: "e-commerce-app",
    title: "E-commerce app",
    imageSrc: "/assets/portfolio/E-commerce.jpg",
    url: "e-commerce-app",
    technologies: ["React", "Styled Components", "Stripe", "Auth0"],
    desc: `• Technologies Used:  
  <br/> - React (for building the user interface with reusable components and state management)  
  <br/> - Styled Components (for scoped, dynamic styling and maintaining a consistent design throughout the app)  
  <br/> - Stripe (for secure payment gateway integration, supporting various payment methods like credit/debit cards, ensuring safe and compliant transactions)  
  <br/> - Auth0 (for secure user authentication, including easy login and registration via GitHub OAuth, enabling a seamless user experience).

  <br/><br/>• Key Features & Functionality:  
  <br/> - Developed a fully functional furniture e-commerce store with an intuitive user interface and seamless product browsing experience.  
  <br/> - Implemented GitHub OAuth for user authentication, providing secure and smooth login and registration for customers.  
  <br/> - Integrated Stripe payment gateway, allowing users to make payments securely with various methods (credit cards, debit cards, etc.).  
  <br/> - Focused on ensuring mobile responsiveness and a modern, user-friendly design using Styled Components.`,
    demo: "https://react-course-comfy-sloth-store.netlify.app/",
    github: "https://github.com/your-username/e-commerce-app",
  },
  {
    id: "food-app",
    title: "Food Ordering App",
    imageSrc: "/assets/portfolio/food-ordering-app.png",
    url: "food-ordering-app",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      " Firebase",
      " Clerk",
      " Razorpay",
    ],
    desc: `• Technologies Used:
      <br/> - Next.js (for server-side rendering and fast loading times, ensuring a smooth, SEO-friendly user experience)
      <br/> - Tailwind CSS (for responsive and modern UI design, ensuring a mobile-first, consistent look across all devices)
      <br/> - Firebase (for real-time database management and backend, enabling scalable, real-time product inventory, user data, and order updates)
      <br/> - Clerk (for secure user authentication, providing seamless login, registration, and profile management with 2FA support)
      <br/> - Razorpay (for secure payment gateway integration, supporting multiple payment methods like credit/debit cards, UPI, etc., ensuring safe and compliant transactions).
      <br/><br/>• Key Features & Functionality:
      <br/> - Developed a fully functional e-commerce platform with clear product categories, detailed pages, and customer reviews
      <br/> - Integrated Razorpay for a seamless checkout experience with secure, multi-payment options
      <br/> - Created an admin dashboard for product and order management, powered by Firebase's real-time database
      <br/> - Focused on mobile responsiveness, with Tailwind CSS ensuring a smooth user experience across devices.`,
    demo: "https://aamhi-khandeshi.vercel.app/",
    github: "https://github.com/rohangawande2303/Food-app-Aamhi-Khandeshi-",
  },
  {
    id: "social-pulse-agency",
    title: "Digital Marketing App",
    imageSrc: "/assets/portfolio/social-pulse-agency.png",
    url: "social-pulse-agency",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX",
      "Framer Motion",
      "Calendly",
    ],
    desc: `• Technologies Used:  
  <br/> - Next.js (for server-side rendering and fast loading times, ensuring a smooth, SEO-friendly user experience)  
  <br/> - TypeScript (for providing type safety and better code maintainability)  
  <br/> - Tailwind CSS (for a mobile-first, responsive UI design, ensuring consistency across devices)  
  <br/> - UI/UX (focused on user-centric design to enhance user experience and interface)  
  <br/> - Framer Motion (for animating components and creating engaging transitions)  
  <br/> - Calendly (for seamless meeting scheduling integration, enhancing the user experience).  

  <br/><br/>• Key Features & Functionality:  
  <br/> - Designed and developed a web app aimed at improving lead generation, enhancing SEO rankings, and integrating Calendly to allow visitors to schedule meetings effortlessly.  
  <br/> - Incorporated lead generation forms that capture user data and trigger automated responses, facilitating smooth interactions with potential clients.  
  <br/> - Implemented SEO best practices, ensuring that the web app ranks well on search engines. Integrated Google Analytics and Google Search Console for tracking performance and insights.  
  <br/> - Focused on scalability and responsive design, ensuring that the app performs seamlessly across various devices and screen sizes.`,
    demo: "https://www.socialpulseagency.in/",
    github: "https://github.com/rohangawande2303/social-pulse-agency",
  },
  {
    id: "real-estate",
    title: "Real Estate App",
    imageSrc: "/assets/portfolio/aarav-realty.png",
    url: "real-estate",
    technologies: [" Next.js", "Tailwind CSS", "UI/UX", "SEO"],
    desc: `• Technologies Used:  
  <br/> - Next.js (for server-side rendering and fast loading times, ensuring a smooth, SEO-friendly user experience)  
  <br/> - JSX (for writing the application in declarative code, enabling clean and maintainable components)  
  <br/> - Tailwind CSS (for responsive and modern UI design, ensuring a mobile-first, consistent look across all devices)  
  <br/> - UI/UX (focused on user-centric design to ensure an intuitive interface and optimal user experience).

  <br/><br/>• Key Features & Functionality:  
  <br/> - Designed and developed a comprehensive real estate platform with property listings and detailed property pages.  
  <br/> - Integrated image galleries for each listing, showcasing high-quality property images for better user engagement.  
  <br/> - Implemented lead generation features, including automated email notifications for inquiries and new property listings.  
  <br/> - Enabled a smooth user experience with responsive design and intuitive navigation, optimized for mobile and desktop.  
  <br/> - Focused on enhancing user journey through clear calls to action, property search filters, and easy-to-navigate pages.`,
    demo: "https://www.aaravrealty.in/",
    github: "https://github.com/rohangawande2303/aarav-realty",
  },
  {
    id: "rutu-group",
    title: "Rutu Group Website",
    imageSrc: "/assets/portfolio/rutu-group.png",
    url: "rutu-group",
    technologies: [
      " Next.js",
      "Tailwind CSS",
      "UI/UX",
      "SEO",
      "Google Sheets Integration",
      "Wireframe & Mockup Design",
    ],
    desc: `• Technologies Used:  
  <br/> -  Next.js (for server-side rendering and fast loading times, ensuring a smooth, SEO-optimized experience for users and search engines)  
  <br/> - Tailwind CSS (for building a modern, fully responsive UI with utility-first styling, ensuring consistency and adaptability across all devices)
  <br/> - UI/UX (focused on intuitive navigation, clear content hierarchy, and visually engaging layouts to enhance user engagement and accessibility) 
  <br/> - SEO (implemented best practices like optimized metadata, structured content, and fast load times to improve visibility and ranking in search engines)
  <br/> - Google Sheets Integration (form submissions are automatically saved to Google Sheets, enabling efficient lead management and easy data access)
  <br/> -  Wireframe & Mockup Design (all design wireframes, mockups, and the final UI/UX were conceptualized and created by me, ensuring a cohesive and user-focused experience).

  <br/><br/>• Key Features & Functionality:  
  <br/> - Designed and developed a professional corporate website for Rutu Group, a reputed real estate developer with 45+ years of legacy, showcasing their diverse portfolio and values.  
  <br/> - Created all design wireframes and mockups from scratch, translating ideas into a polished, production-ready interface. 
  <br/> - Developed dedicated project pages highlighting completed and ongoing developments, with high-quality images, location maps, and detailed amenities to inform potential buyers. 
  <br/> - Integrated a contact form that automatically saves submissions to Google Sheets, streamlining lead capture and follow-up for the sales team.
  <br/> -  Included sections for company history, leadership, awards, and testimonials to build trust and communicate the brand's commitment to quality and customer satisfaction.
  <br/> -  Emphasized Rutu Group's core philosophies such as "Care Better, Build Better," teamwork, professionalism, and customer-first approach through well-structured content and visuals.
  <br/> -  Ensured seamless navigation and fast page loads using Next.js, while Tailwind CSS guarantees the site remains visually appealing and functional on all screen sizes.
  <br/> -  Optimized for SEO with clean URLs, semantic HTML, and structured data, ensuring the site ranks well for relevant real estate queries and attracts organic traffic.
  <br/> -  Included contact forms and inquiry options to facilitate direct communication with potential clients and homebuyers.`,
    demo: "https://rutu-group.vercel.app/",
    github: "https://github.com/Rutugroup/Rutu-group",
  },
];

const TechTag = ({ tech }) => (
  <motion.span
    className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium mr-3 mb-3 border transition-all duration-300 
      bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100`}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {tech}
  </motion.span>
);

const OnePortfolio = ({ portfolio }) => {
  const router = useRouter();
  const { title, imageSrc, desc, demo, github, technologies = [] } = portfolio;

  const redirectToDemo = () => {
    if (demo) {
      window.open(demo, "_blank");
    } else {
      router.push("/portfolio");
    }
  };

  const redirectToGitHub = () => {
    if (github) {
      window.open(github, "_blank");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-gray-950 transition-all duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/20 dark:bg-black/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              onClick={() => router.push("/portfolio")}
              className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 bg-white/50 hover:bg-white/80 dark:bg-gray-800/60 dark:hover:bg-gray-700/60 dark:text-gray-300 dark:hover:text-white backdrop-blur-sm border border-gray-200/50 dark:border-gray-700 transition-all duration-300"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="font-medium">Back to Portfolio</span>
            </motion.button>
          </div>

          {/* Hero Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
              {title}
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Project Image */}
        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative mx-auto max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700">
            <div className="relative group rounded-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                width={800}
                height={450}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technologies Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="sticky top-8 rounded-2xl p-8 bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-900 dark:to-gray-800 border border-gray-200/30 dark:border-gray-700 backdrop-blur-sm shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Tech Stack
              </h2>
              <div className="space-y-3">
                {technologies.length > 0 ? (
                  technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <TechTag tech={tech} />
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    No technologies specified for this project.
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <motion.button
                  onClick={redirectToDemo}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaExternalLinkAlt />
                  <span>View Live Demo</span>
                </motion.button>

                <motion.button
                  onClick={redirectToGitHub}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub />
                  <span>View Source Code</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="rounded-2xl p-8 bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-900 dark:to-gray-800 border border-gray-200/30 dark:border-gray-700 backdrop-blur-sm shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none prose-gray prose-headings:text-gray-900 prose-p:text-gray-700 dark:prose-invert">
                <div
                  className="leading-relaxed space-y-6 dark:text-white"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Generate static paths for dynamic routes
export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Fetch portfolio data based on the route parameter
export async function getStaticProps({ params }) {
  const { id } = params;
  const portfolio = portfolios.find((p) => p.url === id);

  if (!portfolio) {
    return {
      notFound: true,
    };
  }

  return {
    props: { portfolio },
  };
}

export default OnePortfolio;
