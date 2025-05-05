import React from "react";
import Image from "next/image";
import SignIn from "../components/SignIn";

const page = () => {
  return (
    <div className="min-w-full min-h-screen flex">
      <div className=" w-1/2 relative">
        <Image
          fill={true}
          src={"/images/fashion2.jpg"}
          alt="no image"
          className="absolute"
        ></Image>
      </div>

      <div className="flex items-center justify-center w-1/2">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
