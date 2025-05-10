"use client";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import PolicyComponent from "./components/PolicyComponent";
import policyData from "./PolicyData";
import { useState } from "react";
import electronicsProducts from "./ElectronicData";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  return (
    <>
      <div className="min-w-full h-[80vh] bg-black mt-5 flex flex-col items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl text-center font-extrabold text-white tracking-wide leading-tight transform hover:text-blue-500 transition-all duration-300">
            <Typewriter
              words={["Shop the Best Deals, Delivered Fast."]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-8 py-8 absolute bottom-6"
        >
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Know More
            </span>
          </button>

          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              SignUp
            </span>
          </button>
        </motion.div>
      </div>

      <div className="container max-w-7xl mx-auto mt-4">
        <h1 className="text-center text-2xl font-bold mt-6">
          Explore Our Categories
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-around py-10 "
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-[120] h-[120] bg-white rounded-full border border-black relative  cursor-pointer">
              <Link href={"/clothingPage"}>
                <Image
                  fill={true}
                  src={"/images/clothing.jpg"}
                  className="absolute rounded-full"
                  alt="no image"
                ></Image>
              </Link>
            </div>

            <h2 className="text-lg font-bold text-black ">Clothing</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-[120] h-[120] bg-white rounded-full border border-black relative cursor-pointer">
              <Link href={"/gamingPage"}><Image
                fill={true}
                src={"/images/gaming.jpg"}
                className="absolute rounded-full"
                alt="no image"
              ></Image></Link>
            </div>

            <h2 className="text-lg font-bold text-black ">Gaming</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-[120] h-[120] bg-white rounded-full border border-black relative cursor-pointer">
              <Image
                fill={true}
                src={"/images/grocery.jpg"}
                className="absolute rounded-full"
                alt="no image"
              ></Image>
            </div>

            <h2 className="text-lg font-bold text-black ">Grocery</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div
              className="w-[120] h-[120] bg-white rounded-full border border-black relative cursor-pointer"
              onClick={() => setData(electronicsProducts)}
            >
              <Link href={"/Electronics"}>
                <Image
                  fill={true}
                  src={"/images/laptop.jpg"}
                  className="absolute rounded-full"
                  alt="no image"
                ></Image>
              </Link>
            </div>

            <h2 className="text-lg font-bold text-black ">Electronics</h2>
          </div>
        </motion.div>

        <div className="text-center min-w-full py-3">
          <h1 className="text-2xl font-bold text-black">Our Policies</h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="PolicySection grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-6"
        >
          {policyData.map((policy, index) => (
            <PolicyComponent key={index} props={policy} />
          ))}
        </motion.div>
      </div>
    </>
  );
}
