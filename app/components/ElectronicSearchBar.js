import React from "react";

const ElectronicSearchBar = () => {
  return (
    <div className="flex items-center justify-center min-w-full mt-7">
      <input
        className="text-center p-3 rounded-lg bg-white text-gray-400"
        placeholder="Search for Electronics"
        type="text"
      ></input>
    </div>
  );
};

export default ElectronicSearchBar;
