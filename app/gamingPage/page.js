import React from "react";
import gamingProducts from "../GamingData";
import ElectronicFeature from "../components/ElectronicFeature";
import Image from "next/image";

const ClothingPage = () => {
  return (
    <div className="min-w-full min-h-screen">
      <div className=" relative min-w-full min-h-[80vh] ">
        <Image
          src="/images/gamingHero.jpg"
          alt="Electronics Banner"
          fill={true}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Unleash Your Gaming Potential
          </h1>
        </div>
      </div>
      <div className="container flex-col items-center mx-auto gap-5 ">
        <h1 className="text-2xl font-bold text-center pt-24 pb-8">
          Today's Special Deals
        </h1>

        <div className="flex items-center justify-center min-w-full pb-16">
          <input
            className="text-center p-3  bg-black text-white w-1/2 rounded-e-full rounded-s-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
            placeholder="Search for Electronics"
            type="text"
          ></input>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 place-items-center mb-7">
          {/* Add your clothing products here */}
          {gamingProducts.map((product) => (
            <ElectronicFeature key={product.id} props={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothingPage;
