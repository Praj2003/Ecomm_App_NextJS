import React from "react";

import Image from "next/image";

const PolicyComponent = ({ props }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl shadow-xl bg-white p-4">
      <h2 className="text-lg font-bold text-black text-center">
        {props.title}
      </h2>

      <div className="w-[120] h-[120] bg-white rounded-full border border-black relative">
        <Image
          fill={true}
          src={props.imageUrl}
          className="absolute rounded-full"
          alt="no image"
        ></Image>
      </div>

      <p className="text-center text-sm text-gray-500">{props.description}</p>
    </div>
  );
};

export default PolicyComponent;
