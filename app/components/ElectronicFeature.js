"use client";
import { useState, useEffect } from "react";

const ElectronicFeature = ({ props }) => {
  const [clicked, setClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([{}]);
  const isItemPresent = cartItems.some(
    (item) => item.name === props.name && item.brand === props.brand
  );

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await fetch("/api/CartRoute", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await response.json();
        setCartItems(data.data); // Update state with fetched cart items
        console.log(data.data);
        setIsLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setIsLoading(false); // Stop loading even if there's an error
      }
    }

    
    fetchCartItems();
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    console.log("Updated cart items:", cartItems);
  }, [cartItems]);


  async function handleDelete() {
    try {
      setIsLoading(true);
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
      setCartItems((prev) =>
        prev.filter(
          (item) => item.name !== props.name && item.brand !== props.brand
        )
      );
      window.location.reload();
      setIsLoading(false);
      console.log("Item deleted successfully");
      console.log(cartItems);
      
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
      window.location.reload();
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

          <button
            onClick={isItemPresent ? handleDelete : handleClick}
            type="button"
            className="mr-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {isItemPresent ? (
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
