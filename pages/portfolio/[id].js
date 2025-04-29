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
    technologies: ["React.js", "React Router", "CSS", "JavaScript"], // Added technologies field
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
    github: "https://github.com/rohangawande2303/Disney-clone", // Sample GitHub link
  },
  {
    id: "e-commerce-app",
    title: "E-commerce app",
    imageSrc: "/assets/portfolio/E-commerce.jpg",
    url: "e-commerce-app",
    technologies: ["React", "Styled Components", "Stripe", "Auth0"], // Added technologies field
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
    github: "https://github.com/your-username/e-commerce-app", // Sample GitHub link
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
    ], // Added technologies field
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
    github: "https://github.com/rohangawande2303/Food-app-Aamhi-Khandeshi-", // Sample GitHub link
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
    ], // Added technologies field
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
    github: "https://github.com/rohangawande2303/social-pulse-agency", // Sample GitHub link
  },
  {
    id: "real-estate",
    title: "Real Estate App",
    imageSrc: "/assets/portfolio/aarav-realty.png",
    url: "real-estate",
    technologies: [" Next.js", "Tailwind CSS", "UI/UX", "SEO"], // Added technologies field
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
    github: "https://github.com/rohangawande2303/aarav-realty", // Sample GitHub link
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
    ], // Added technologies field
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
    github: "https://github.com/Rutugroup/Rutu-group", // Sample GitHub link
  },
];

const TechTag = ({ tech }) => (
  <motion.span
    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
    whileHover={{ scale: 1.05 }}
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
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Added mt-16 to push the back button below the navbar */}
        <motion.button
          onClick={() => router.push("/portfolio")}
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200 mb-8 mt-16"
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft className="mr-2" />
          <span className="font-semibold">Back to Portfolio</span>
        </motion.button>

        {/* Reduced top margin on title since we added it to the back button */}
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-6 mt-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Added max-h-96 to limit image height and ensure it stays in its container */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 max-h-96 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="contain" /* Changed from cover to contain to prevent overflow */
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Technologies Used
          </h2>
          <div>
            {technologies.length > 0 ? (
              technologies.map((tech, index) => (
                <TechTag key={index} tech={tech} />
              ))
            ) : (
              <p>No technologies specified for this project.</p>
            )}
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Description
          </h2>
          <div
            className="text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={redirectToDemo}
            className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-md font-semibold tracking-wide hover:bg-blue-600 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="mr-2" />
            View Demo
          </motion.button>
          <motion.button
            onClick={redirectToGitHub}
            className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-md font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </motion.button>
        </motion.div>
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
