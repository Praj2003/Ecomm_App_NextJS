"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="p-4 bg-black text-white font-semibold text-sm w-full">
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14 p-4 w-full">
        <div className=" order-1 flex items-center justify-center flex-col gap-5">
          <div>
            <motion.p
              className="p-3 rounded-2xl cursor-pointer"
              whileHover={{ scale: 1.1, background: "white", color: "black" }}
            >
              Home
            </motion.p>
          </div>
          <div>
            <motion.p
              className="p-3 rounded-2xl cursor-pointer"
              whileHover={{ scale: 1.1, background: "white", color: "black" }}
            >
              About Us
            </motion.p>
          </div>
          <div>
            <motion.p
              className="p-3 rounded-2xl cursor-pointer"
              whileHover={{ scale: 1.1, background: "white", color: "black" }}
            >
              Contact Us
            </motion.p>
          </div>
        </div>

        <div className=" order-2 flex items-center justify-center flex-col gap-7 ">
          <div className="flex w-full justify-between items-center gap-10">
            <p className="w-1/2 text-center">Email:</p>
            <p className="w-1/2 text-center"> prajval.kanda2o@abc.com </p>
          </div>

          <div className="flex w-full items-center justify-between  gap-10">
            <p className="w-1/2 text-center">contact:</p>
            <p className="w-1/2 text-center"> 70110XXXXX</p>
          </div>

          <div className="flex w-full  items-center  justify-between  gap-10">
            <p className="w-1/2 text-center">Address:</p>
            <p className="w-1/2 text-center">
              {" "}
              T-20 Green Park Extention,New Delhi - 110016{" "}
            </p>
          </div>
        </div>

        <div className=" order-3 flex items-center justify-center flex-col gap-5">
          <p className="text-lg">Follow Us</p>
          <div className="flex gap-5">
            <FaFacebook className="text-3xl cursor-pointer" />
            <FaTwitter className="text-3xl cursor-pointer" />
            <FaInstagram className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
