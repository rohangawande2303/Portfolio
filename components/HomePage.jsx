import React from "react";
import heroImage from "../public/assets/heroImage.png";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-80 h-56 mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>
        <h1 className="uppercase font-bold text-gray-700 text-7xl">
          frontend developer
        </h1>
        <p className="text-gray-600 text-xl max-w-sm mx-auto">
          I am a Fresher. I like to work on Web Application using technologies
          like React, Next JS, Tailwind.
        </p>

        <Link href="/#about">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            Know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
