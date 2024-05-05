import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const portfolios = [
  {
    id: "disney-app",
    title: "Disney-clone app",
    imageSrc: "/assets/portfolio/Disney-clone.jpg.png",
    url: "disney-app",
    desc: "This is a disney clone made with react ",
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
    imageSrc: "/assets/portfolio/food-ordering-app.jpg",
    url: "food-ordering-app",
    desc: "This is a food ordering app built with React.",
    demo: "https://tasty-treat-food-app.netlify.app/",
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

// import React from "react";
// import Netflix from "../../public/assets/portfolio/Netflix-clone.jpg";
// import Ecommerce from "../../public/assets/portfolio/E-commerce.jpg";
// // import Linkedin from "../../public/assets/portfolio/linkedin-clone.jpg";
// import reactWeather from "../../public/assets/portfolio/reactWeather.jpg";
// import arrayDestruct from "../../public/assets/portfolio/arrayDestruct.jpg";
// import Disney from "../../public/assets/portfolio/Disney-clone.jpg.png";
// import foodapp from "../../public/assets/portfolio/food-ordering-app.jpg";
// import { useRouter } from "next/router";
// import { FaGithub } from "react-icons/fa";
// import { AiOutlineCaretRight } from "react-icons/ai";
// import { BiChevronLeft } from "react-icons/bi";
// import Link from "next/link";
// import Image from "next/image";
// import Portfolio from "./../../components/Portfolio";

// const redirectToURL = (demo) => {
//   window.open(demo, "_blank");
// };

// const portfolios = [
//   {
//     id: "disney-app",
//     title: "Disney-clone app",
//     imageSrc: Disney,
//     url: "disney-app",
//     desc: "This is a disney clone made with react ",
//     demo: "https://disney-clone-project.netlify.app/",
//   },
//   {
//     id: "e-commerce-app",
//     title: "e-commerce app",
//     imageSrc: Ecommerce,
//     url: "e-commerce-app",
//     desc: "This is a E-commerce Wood store that is fully functional and Technology used are React, OAuth, SCSS, Stripe payment gatway.",
//     // demo: "https://testing-comfy.netlify.app/",
//     demo: "https://react-course-comfy-sloth-store.netlify.app/",
//   },
//   {
//     id: "food-app",
//     title: "Food ordering app",
//     imageSrc: foodapp,
//     url: "food-ordering-app",
//     desc: "This is a E-commerce Wood store that is fully functional and Technology used are React, OAuth, SCSS, Stripe payment gatway.",
//     demo: "https://tasty-treat-food-app.netlify.app/",
//   },
//   {
//     id: "weather-app",
//     title: "react weather app",
//     imageSrc: reactWeather,
//     url: "react-weather",
//     desc: "This is a E-commerce Wood store that is fully functional and Technology used are React, OAuth, SCSS, Stripe payment gatway.",
//   },
//   {
//     id: "array-app",
//     title: "Array Destruct",
//     imageSrc: arrayDestruct,
//     url: "array-Destruct",
//     desc: "This is a E-commerce Wood store that is fully functional and Technology used are React, OAuth, SCSS, Stripe payment gatway.",
//   },
// ];

// const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

// function openDemoLink(url) {
//   window.open(url, "_blank");
// }

// // export async function getStaticPaths() {
// //   const paths = portfolios.map((p) => ({
// //     params: { id: p.url },
// //   }));

// //   return {
// //     paths,
// //     fallback: false,
// //   };
// // }

// // export async function getStaticProps({ params }) {
// //   const Portfolio = getPortfolioFrom(params.id);

// //   return {
// //     props: { Portfolio },
// //   };
// // }

// // const OnePortfolio = ({ Portfolio: { title, imageSrc, desc, demo } }) => {
// //   const router = useRouter();
// //   const { id } = router.query; // Retrieve the id from router.query
// const OnePortfolio = ({ Portfolio }) => {
//   // Check if Portfolio is undefined or null
//   if (!Portfolio) {
//     return <div>Portfolio not found</div>;
//   }

//   const { title, imageSrc, desc, demo } = Portfolio;
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const router = useRouter();
//   const { id } = router.query;

//   const portfolio = portfolios.find((p) => p.id === id);

//   const redirectToDemo = () => {
//     if (portfolio && portfolio.demo) {
//       window.open(portfolio.demo, "_blank");
//     } else {
//       router.push("/portfolio");
//     }
//   };

//   // if (!Portfolio) {
//   //   // Handle the case where the portfolio item is not found
//   //   return (
//   //     <div>
//   //       <p>Portfolio not found</p>
//   //       <button onClick={() => router.push("/portfolio")}>
//   //         Back to Portfolio
//   //       </button>
//   //       {/* <Link href="/portfolio">
//   //         <a>Back to Portfolio</a>
//   //       </Link> */}
//   //     </div>
//   //   );
//   // }

//   return (
//     <div className="h-fit w-full text-center">
//       <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
//         <div className="flex">
//           <button
//             onClick={() => router.push("/portfolio")}
//             className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer"
//           >
//             <BiChevronLeft size={25} /> back
//           </button>

//           {/* <Link
//             // href={`/portfolio/[id]?id=${id}`}
//             href={`/portfolio/${id}`}
//             // as={`/portfolio/${portfolio.id}/comment-1`}
//           >
//             <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
//               <BiChevronLeft size={25} /> back
//             </div> */}
//           {/* </Link> */}
//         </div>
//         <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
//           {" "}
//           {title}
//         </h1>
//         <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
//           <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
//         </div>
//         <h2 className="text-center md:text-left my-4 text-2xl font-bold">
//           Description
//         </h2>

//         <p>
//           {" "}
//           {desc}
//           {/* The company itself is a very successful company. It will be wisely
//           pursued in a less time, hindering the harsher option, not blinded, of
//           rejecting the corrupt and similar to certain kinds of life. But the
//           smallest troubles born from the labor of the architect, here all that
//           pain, but, will follow, the debts seen through, they never know the
//           pain of the necessities, as if they were to do the whole, no one would
//           have any result. But with that pain he takes pains easily and flees
//           from similar needs? There is no chosen one, in enduring or often
//           suffering pain, it hinders something by which we accuse the pain of
//           pain. But no one has the choice. */}
//         </p>
//         <div className="flex items-center justify-center gap-10">
//           <Link href="">
//             <div
//               className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer"
//               onClick={redirectToDemo}
//             >
//               demo
//               <span className="duration-200 ease-in">
//                 <AiOutlineCaretRight size={18} className="ml-2" />
//               </span>
//             </div>
//           </Link>

//           <Link href="https://github.com/rohangawande2303" passHref>
//             <a target="_blank">
//               <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
//                 my portfolio
//                 <span className="duration-200 ease-in">
//                   <FaGithub size={18} className="ml-2" />
//                 </span>
//               </div>
//             </a>
//           </Link>
//         </div>
//       </div>
//       {/* <div>
//         {portfolios.map((portfolio) => (
//           <div key={portfolio.id}>
//             <h2>{portfolio.title}</h2>
//             <p>{portfolio.desc}</p>
//             <button onClick={() => openDemoLink(portfolio.demo)}>Demo</button>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const paths = portfolios.map((p) => ({
//     params: { id: p.url },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }
// export async function getStaticProps({ params }) {
//   const { id } = params;
//   const portfolio = portfolios.find((p) => p.url === id);

//   if (!portfolio) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { portfolio },
//   };
// }

// // export async function getStaticProps({ params }) {
// //   const { id } = params;
// //   const portfolio = portfolios.find((p) => p.url === id);

// //   return {
// //     props: { portfolio },
// //   };
// // }

// // export async function getStaticPaths() {
// //   const paths = portfolios.map((p) => ({
// //     params: { id: p.id.toString() },
// //   }));

// //   return {
// //     paths,
// //     fallback: false,
// //   };
// // }

// // export async function getStaticProps({ params }) {
// //   const { id } = params;
// //   const Portfolio = portfolios.find((p) => p.id === id);

// //   return {
// //     props: { Portfolio },
// //   };
// // }

// export default OnePortfolio;
