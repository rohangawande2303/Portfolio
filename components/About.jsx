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
            Welcome to my portfolio! I am Rohan Gawande, a passionate and driven
            web developer eager to make my mark in the digital realm. At 22
            years old, I bring a fresh perspective and a wealth of hands-on
            experience to the table.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            With a strong foundation in HTML, CSS, JavaScript, Python, and
            React, I have embarked on a journey of continuous learning and
            growth. My proficiency extends to Next.js, Git, GitHub, Tailwind
            CSS, and Node.js, empowering me to craft dynamic and responsive web
            solutions with ease. Through various projects, I have honed my
            skills in the MERN stack, showcasing my ability to develop robust
            applications from conception to deployment.
          </p>
          {/* <p className="py-4 max-w-2xl mx-auto">
            As a firm believer in collaboration and synergy, I thrive in team
            environments, leveraging collective expertise to achieve shared
            goals. My dedication, adaptability, and eagerness to learn make me a
            valuable asset to any project or team.
          </p> */}
          <p className="py-4 max-w-2xl mx-auto">
            Explore my portfolio to see firsthand the passion and dedication I
            bring to my craft. I am excited to embark on new challenges and
            opportunities, contributing my skills and creativity to make
            meaningful contributions in the ever-evolving world of web
            development. Let us build something amazing together!
          </p>
        </div>
        <div className="flex items-center justify-center gap-10">
          {/* <Link href="resume (4).pdf" download={true}>
            <a target="_blank">
              <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                resume
                <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                  <MdExpandMore size={25} />
                </span>
              </div>
            </a>
          </Link> */}

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
