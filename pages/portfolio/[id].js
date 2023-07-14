import React from "react";
import Netflix from "../../public/assets/portfolio/Netflix-clone.jpg";
import Ecommerce from "../../public/assets/portfolio/E-commerce.jpg";
import Linkedin from "../../public/assets/portfolio/linkedin-clone.jpg";
import reactWeather from "../../public/assets/portfolio/reactWeather.jpg";
import arrayDestruct from "../../public/assets/portfolio/arrayDestruct.jpg";

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import Portfolio from "./../../components/Portfolio";

const portfolios = [
  {
    id: 1,
    title: "netflix app",
    imageSrc: Netflix,
    url: "netflix-app",
  },
  {
    id: 2,
    title: "e-commerce app",
    imageSrc: Ecommerce,
    url: "e-commerce-app",
  },
  {
    id: 3,
    title: "linkedin clone app",
    imageSrc: Linkedin,
    url: "linkedin-clone-app",
  },
  {
    id: 4,
    title: "react weather app",
    imageSrc: reactWeather,
    url: "react-weather",
  },
  {
    id: 5,
    title: "Array Destruct",
    imageSrc: arrayDestruct,
    url: "array-Destruct",
  },
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

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
  const Portfolio = getPortfolioFrom(params.id);

  return {
    props: { Portfolio },
  };
}

const OnePortfolio = ({ Portfolio: { title, imageSrc } }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>
        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {" "}
          {title}
        </h1>
        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>
        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <p>
          The company itself is a very successful company. It will be wisely
          pursued in a less time, hindering the harsher option, not blinded, of
          rejecting the corrupt and similar to certain kinds of life. But the
          smallest troubles born from the labor of the architect, here all that
          pain, but, will follow, the debts seen through, they never know the
          pain of the necessities, as if they were to do the whole, no one would
          have any result. But with that pain he takes pains easily and flees
          from similar needs? There is no chosen one, in enduring or often
          suffering pain, it hinders something by which we accuse the pain of
          pain. But no one has the choice.
        </p>
        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/rohangawande2303" passHref>
            <a target="_blank">
              <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                my portfolio
                <span className="duration-200 ease-in">
                  <FaGithub size={18} className="ml-2" />
                </span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
