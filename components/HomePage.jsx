import React from "react";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-24 h-full">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center md:text-left h-full">
            <motion.div
              className="text-gray-800 text-4xl md:text-6xl lg:text-7xl flex flex-col items-center space-y-2 md:space-y-0 md:space-x-5"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="md:inline-block">HI, I AM</span>{" "}
              <span className="text-blue-500 typed-text md:inline-block">
                Rohan Gawande
              </span>
            </motion.div>
            <motion.p
              className="text-gray-700 text-lg md:text-xl max-w-md mx-auto mt-4 md:mt-6 lg:max-w-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              Welcome to my portfolio! I am a passionate frontend developer
              dedicated to crafting exceptional user experiences with React,
              Next.js, and Tailwind CSS.
            </motion.p>
            <Link href="/#about">
              <motion.div
                className="group flex items-center justify-center mt-6 bg-blue-500 text-white px-1 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Know more{" "}
                <span className="ml-1">
                  <MdExpandMore size={25} />
                </span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;

// this is working correctly
// import React from "react";
// import { MdExpandMore } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-white flex justify-center items-center">
//       <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-24 h-full">
//         <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 h-full">
//           <div className="text-center md:text-left h-full">
//             <div className="text-gray-800 text-4xl md:text-6xl lg:text-7xl flex flex-col items-center space-y-2 md:space-y-0 md:space-x-5">
//               <span className="md:inline-block">HI, I AM</span>{" "}
//               <span className="text-blue-500 typed-text md:inline-block">
//                 Rohan Gawande
//               </span>
//             </div>
//             <p className="text-gray-700 text-lg md:text-xl max-w-md mx-auto mt-4 md:mt-6 lg:max-w-lg">
//               Welcome to my portfolio! I am a passionate frontend developer
//               dedicated to crafting exceptional user experiences with React,
//               Next.js, and Tailwind CSS.
//             </p>

//             <Link href="/#about">
//               <div className="group flex items-center justify-center mt-6 bg-blue-500 text-white px-1 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-300">
//                 Know more
//                 <span className="ml-1">
//                   <MdExpandMore size={25} />
//                 </span>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React from "react";
// import { MdExpandMore } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-white flex justify-center items-center">
//       <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-24">
//         <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
//           <div className="text-center md:text-left">
//             <div className="text-gray-800 text-4xl md:text-6xl lg:text-7xl flex flex-col items-center space-y-2 md:space-y-0 md:space-x-5">
//               <span className="md:inline-block">HI, I AM</span>{" "}
//               <span className="text-blue-500 typed-text md:inline-block">
//                 Rohan Gawande
//               </span>
//             </div>
//             <p className="text-gray-700 text-lg md:text-xl max-w-md mx-auto mt-4 md:mt-6 lg:max-w-lg">
//               Welcome to my portfolio! I am a passionate frontend developer
//               dedicated to crafting exceptional user experiences with React,
//               Next.js, and Tailwind CSS.
//             </p>

//             <Link href="/#about">
//               <div className="group flex items-center justify-center mt-6 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-300">
//                 Know more
//                 <span className="ml-2">
//                   <MdExpandMore size={25} />
//                 </span>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React from "react";
// import heroImage from "../public/assets/hero-img1.png.jpg";
// import { MdExpandMore } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";

// const HomePage = () => {
//   return (
//     <div id="home" className="h-screen w-full text-center">
//       <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col md:flex-row justify-around items-center">
//         {/* <div className="w-96 md:h-96 h-60 mx-auto overflow-hidden rounded-xl">
//           <Image src={heroImage} alt="me" />
//         </div> */}
//         <div className=" flex flex-col pt-6 justify-center">
//           <h1 className="uppercase font-semibold  text-gray-700 text-4xl md:text-7xl">
//             frontend developer
//           </h1>
//           <p className="text-gray-600 text-xl max-w-sm mx-auto mt-8">
//             I am a Fresher. I like to work on Web Application using technologies
//             like React, Next JS, Tailwind.
//           </p>

//           <Link href="/#about">
//             <div
//               className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer "
//               //   className="group flex w-[185px] items-center justify-center my-8
//               //   mt-12
//               // ml-80 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer"
//             >
//               Know more
//               <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
//                 <MdExpandMore size={25} />
//               </span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
