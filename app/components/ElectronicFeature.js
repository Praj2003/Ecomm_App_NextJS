"use client";
import React from "react";
import { useState } from "react";

const ElectronicFeature = ({ props }) => {
  const [clicked, setClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  async function handleDelete() {
    try {
      setClicked((prev) => !prev);

      const newData = {
        name: props.name,
        brand: props.brand,
        price: props.discountPrice,
      };

      const response = await fetch(`/api/CartRoute?name=${props.name}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleClick() {
    try {
      setClicked((prev) => !prev);

      const newData = {
        name: props.name,
        brand: props.brand,
        price: props.discountPrice,
        quantity: quantity,
      };

      const response = await fetch("/api/CartRoute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col items-center  gap-5 bg-white rounded-3xl shadow-2xl w-[300px] h-[400px]">
      <div className="relative w-full h-1/2 bg-black flex items-center justify-center rounded-3xl">
        <p className="text-white text-xl font-semibold">Image Section</p>
      </div>

      <div className="w-full ">
        <h2 className="text-lg text-black font-bold text-center w-full">
          {props.name}
        </h2>
        <p className="text-md text-gray-600 text-center w-full">
          {props.brand}
        </p>

        <div className="flex justify-center items-center gap-2 pt-2">
          <p className="text-md text-gray-400 line-through">₹{props.price}</p>

          <p className="text-md text-red-500 font-semibold">
            ₹{props.discountPrice}
          </p>
        </div>

        <div className="w-full flex justify-end items-center gap-3 mt-7">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 text-center border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={clicked ? handleDelete : handleClick}
            type="button"
            className="mr-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {clicked ? (
              <p className="text-white text-sm font-semibold">
                Remove From Cart
              </p>
            ) : (
              <p className="text-white text-sm font-semibold">Add to Cart</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectronicFeature;
