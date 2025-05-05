"use client";
import React from "react";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";


const Dashboard = ({ user }) => {
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: " ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/UserRoute?email=${user}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        console.log(data?.info);

        setuserData((prevData) => ({
          ...prevData,
          ...data?.info,
        }));
      } catch (error) {
        console.error("Fetch error:", error);
        return null;
      }
    };

    fetchUserData();
  }, [user]);

  if (!user) {
    notFound();
  }

  const handleSave = async () => {
    try {
      const response = await fetch("api/UserRoute", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data) {
        alert("User updated Successfully");
        console.log(data);
      }

      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-28 flex flex-col gap-6 mb-12">
      <h1 className="text-center my-6 font-bold text-2xl">Dashboard</h1>

      <div className="flex items-center justify-between gap-40">
        <label className="text-lg font-semibold w-1/3 text-left">
          Username:
        </label>
        <input
          type="text"
          name="username"
          value={userData.username || ""}
          onChange={handleChange}
          className="bg-white text-black  border border-black p-2 text-center rounded-lg shadow-xl  w-2/3"
        />
      </div>

      <div className="flex items-center justify-between gap-40">
        <label className="text-lg font-semibold w-1/3 text-left">Email:</label>
        <input
          type="text"
          name="email"
          value={userData.email || ""}
          onChange={handleChange}
          className="bg-white border border-black p-2 text-center rounded-lg shadow-xl  w-2/3"
        />
      </div>

      <div className="flex items-center justify-between gap-40">
        <label className="text-lg font-semibold w-1/3 text-left">
          Profile Pick URL:
        </label>
        <input
          type="text"
          name="profilepic"
          value={userData.profilepic || ""}
          onChange={handleChange}
          className="bg-white border border-black p-2 text-center rounded-lg shadow-xl  w-2/3"
        />
      </div>

      <div className="flex items-center justify-between gap-40">
        <label className="text-lg font-semibold w-1/3 text-left">
          Cover Pic URL:
        </label>
        <input
          type="text"
          name="coverpic"
          value={userData.coverpic || ""}
          onChange={handleChange}
          className="bg-white border border-black p-2 text-center rounded-lg shadow-xl  w-2/3"
        />
      </div>

      <div className="flex items-center justify-between gap-40">
        <label className="text-lg font-semibold w-1/3 text-left">
          Razorpay ID:
        </label>
        <input
          type="text"
          name="razorpayid"
          value={userData.razorpayid || ""}
          onChange={handleChange}
          className="bg-white border border-black p-2 text-center rounded-lg shadow-xl  w-2/3"
        />
      </div>

      <div className="flex items-center justify-between gap-40">
        <label className="text-lg font-semibold w-1/3 text-left">
          Razorpay Secret:
        </label>
        <input
          type="text"
          name="razorpaysecret"
          value={userData.razorpaysecret || ""}
          onChange={handleChange}
          className="bg-white border border-black p-2 text-center rounded-lg shadow-xl  w-2/3"
        />
      </div>

      <div className="flex items-center justify-center my-4">
        <button
          onClick={handleSave}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Save
          </span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
