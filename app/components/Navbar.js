"use client";
import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown2Open, setIsDropDown2Open] = useState(false);
  return (
    <nav className="flex items-center justify-between p-3 bg-white shadow-2xl min-w-full fixed top-0 z-50">
      <div className="flex items-center justify-center gap-5">
        <div className="w-[60] h-[60] rounded-full relative ">
          <Image
            fill={true}
            src={"/images/Shopify.png"}
            alt="No Image"
            className="rounded-full"
          ></Image>
        </div>
        <Link href={"/"}>
          <button className="text-xl font-bold">Shopify</button>
        </Link>
      </div>

      <div className="flex items-center justify-between gap-9 mr-4 relative">
        <button
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          onBlur={() =>
            setTimeout(() => {
              setIsDropDownOpen(false);
            }, 300)
          }
          className="text-xl text-black"
        >
          <FaBars />
        </button>

        {isDropDownOpen && (
          <div className="absolute top-16 -left-44 z-10 shadow-xl bg-white w-80 rounded-xl p-4 ">
            <ul className="flex flex-col gap-8">
              <motion.li
                whileHover={{
                  scale: 1.1,
                  color: "white",
                  backgroundColor: "black",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="cursor-pointer text-center min-w-full rounded-2xl p-2"
              >
                Home
              </motion.li>

              <motion.li
                whileHover={{
                  scale: 1.1,
                  color: "white",
                  backgroundColor: "black",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="cursor-pointer text-center min-w-full rounded-2xl p-2"
              >
                About Us
              </motion.li>

              <motion.li
                whileHover={{
                  scale: 1.1,
                  color: "white",
                  backgroundColor: "black",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="cursor-pointer text-center min-w-full rounded-2xl p-2"
              >
                Contact
              </motion.li>

              <motion.li
                onClick={() => signOut()}
                whileHover={{
                  scale: 1.1,
                  color: "white",
                  backgroundColor: "black",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="cursor-pointer text-center min-w-full rounded-2xl p-2"
              >
                Sign-in
              </motion.li>

              <motion.li
                whileHover={{
                  scale: 1.1,
                  color: "white",
                  backgroundColor: "black",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="cursor-pointer text-center min-w-full rounded-2xl p-2"
              >
                <Link href={"/DashboardPage"}>Dashboard</Link>
              </motion.li>
            </ul>
          </div>
        )}
        {!session && (
          <Link href={"/SignInPage"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                SignIn
              </span>
            </button>
          </Link>
        )}

        {session && (
          <div className="flex items-center justify-center gap-2 relative ">
            <button
              onClick={() => setIsDropDown2Open(!isDropDown2Open)}
              onBlur={() =>
                setTimeout(() => {
                  setIsDropDown2Open(false);
                }, 300)
              }
              type="button"
              className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Welcome {session.user.email}
            </button>

            {isDropDown2Open && (
              <div className="absolute  top-12 left-9 shadow-xl bg-white w-40 rounded-xl p-5">
                <ul className="text-black font-semibold">
                  <motion.li
                    whileHover={{ scale: 1.1, color: "black" }}
                    className="text-center cursor-pointer"
                  >
                    <button onClick={() => signOut()}>SignOut</button>
                  </motion.li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
