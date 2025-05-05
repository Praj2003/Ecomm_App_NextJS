"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }

  async function handleSubmit() {
    if (!formData.name || !formData.email || !formData.password) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("/api/UserRoute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log(data);

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col gap-4 p-3 bg-white shadow-2xl rounded-2xl text-sm font-bold">
      <h1 className="text-center text-xl mb-7">Sign Up</h1>
      <div className="flex items-center justify-between gap-8">
        <p>Enter Your Name:</p>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          className="border border-black rounded-xl p-2 text-center"
        />
      </div>

      <div className="flex items-center justify-between gap-8">
        <p>Enter Your Email:</p>
        <input
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="Enter your email"
          value={formData.email}
          className="border border-black rounded-xl p-2 text-center"
        />
      </div>

      <div className="flex items-center justify-between gap-8">
        <p>Enter Your Password:</p>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          className="border border-black rounded-xl p-2 text-center"
        />
      </div>

      <div className="flex items-center justify-between gap-8">
        <p>Confirm Your Password:</p>
        <input
          name="password"
          type="password"
          placeholder="Confirm your password"
          className="border border-black rounded-xl p-2 text-center"
        />
      </div>

      <div className="flex items-center justify-center mt-7">
        <button
          onClick={handleSubmit}
          type="button"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit
          </span>
        </button>

        <div>
          {message && <p className="text-red-500 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
