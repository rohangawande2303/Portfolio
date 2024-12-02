import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const portfolios = [
  {
    id: "disney-app",
    title: "Disney-clone app",
    imageSrc: "/assets/portfolio/Disney-clone.jpg.png",
    url: "disney-app",
    desc: "The Disney Clone Project is a captivating platform built with React.js, faithfully replicating the magic of Disney's content delivery. It boasts an immersive user interface inspired by Disney's enchanting world. Leveraging React Router for seamless navigation, it provides an engaging experience akin to Disney's official website. With its responsive design and captivating visuals, the project showcases frontend technologies at their finest, delivering a magical browsing experience for Disney enthusiasts worldwide.",
    demo: "https://disney-clone-project.netlify.app/",
  },
  {
    id: "e-commerce-app",
    title: "e-commerce app",
    imageSrc: "/assets/portfolio/E-commerce.jpg",
    url: "e-commerce-app",
    desc: "This is a E-commerce Wood store that is fully functional and Technology used are React, OAuth, SCSS, Stripe payment gatway.",
    demo: "https://react-course-comfy-sloth-store.netlify.app/",
  },
  {
    id: "food-app",
    title: "Food ordering app",
    imageSrc: "/assets/portfolio/food-ordering-app.png",
    url: "food-ordering-app",
    desc: "This is a maharashtrian food selling app that is fully functional and Technology used are nextjs, tailwindcss, stripe payment gatway, appwrite database.",
    demo: "https://aamhi-khandeshi.vercel.app/",
    // demo: "https://tasty-treat-food-app.netlify.app/home"
  },
  {
    id: "Social-pulse-agency",
    title: "digital marketing app",
    imageSrc: "/assets/portfolio/social-pulse-agency.png",
    url: "social-pulse-agency",
    desc: "This modern Digital Marketing website was built using Next.js, Tailwind CSS, and TypeScript. It features a responsive layout with a sleek, visually appealing design crafted in Figma. The website showcases my skills and experience as a full-stack developer, including projects I've worked on. Additionally, I've integrated Calendly to allow visitors to easily schedule meetings, and a contact form that directly sends email with the submitted information. This digital marketing website serves as an online presence to highlight my expertise in the field.",
    demo: "https://www.socialpulseagency.in/",
  },
  {
    id: "Real-estate",
    title: "Real Estate app",
    imageSrc: "/assets/portfolio/aarav-realty.png",
    url: "real-estate",
    desc: "The project showcased on my portfolio is a dynamic real estate website developed using Next.js and Tailwind CSS. This platform features an intuitive user interface, responsive design, and seamless navigation, enhancing the user experience for property seekers. Key technologies employed include React for building interactive components, and various APIs for real-time data integration. The site effectively showcases listings with detailed property information, high-quality images, and an integrated search functionality, making it a comprehensive solution for real estate needs.",
    demo: "https://www.aaravrealty.in/",
  },
];

const OnePortfolio = ({ portfolio }) => {
  const router = useRouter();

  // If the portfolio item is not found, redirect to the /portfolio page
  // if (!portfolio) {
  //   router.push("/portfolio");
  //   return null;
  // }

  const { title, imageSrc, desc, demo } = portfolio;

  const redirectToDemo = () => {
    if (portfolio && portfolio.demo) {
      window.open(portfolio.demo, "_blank");
    } else {
      router.push("/portfolio");
    }
  };

  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <button
            onClick={() => router.push("/portfolio")}
            className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer"
          >
            back
          </button>
        </div>
        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>
        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>
        <p>{desc}</p>
        <div className="flex items-center justify-center gap-10">
          <button
            className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer"
            onClick={redirectToDemo}
          >
            demo
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

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
