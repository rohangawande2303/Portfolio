import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          About
        </h2>
        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            The company itself is a very successful company. How often do you
            have the option to get him to do the same and from where does he
            flee from the forgiveness of the truth? Most of the souls, and they
            fall to blame, but for those who bear the loose flight! To be
            assumed born, we lead with pain, the times are less than the times
            to do it and the resilience is called the flight of greater
            troubles, some fault.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            The company itself is a very successful company. How often do you
            have the option to get him to do the same and from where does he
            flee from the forgiveness of the truth? Most of the souls, and they
            fall to blame, but for those who bear the loose flight! To be
            assumed born, we lead with pain, the times are less than the times
            to do it and the resilience is called the flight of greater
            troubles, some fault.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            The company itself is a very successful company. How often do you
            have the option to get him to do the same and from where does he
            flee from the forgiveness of the truth? Most of the souls, and they
            fall to blame, but for those who bear the loose flight! To be
            assumed born, we lead with pain, the times are less than the times
            to do it and the resilience is called the flight of greater
            troubles, some fault.
          </p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link href="resume.pdf" download={true}>
            <a target="_blank">
              <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                resume
                <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                  <MdExpandMore size={25} />
                </span>
              </div>
            </a>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
