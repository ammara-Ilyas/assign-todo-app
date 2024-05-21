import React from "react";
import Button from "../widgets/Button";
const SearchFilter = () => {
  return (
    <div className="h-1/4 flex items-center justify-between mx-10">
      <input
        type="text"
        placeholder="Search Todo"
        className="w-3/4 p-2 rounded-md outline-none"
      />
      <Button text="Add new Item" tailwindClasses="bg-white" />
    </div>
  );
};

export default SearchFilter;
