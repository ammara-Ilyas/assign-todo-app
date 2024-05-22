"use client";
import React, { useContext } from "react";
import Button from "../widgets/Button";
import { TodoContext } from "../contextApi/ContextApi";
import { TodoContextType } from "../types/Types";
const SearchFilter = () => {
  const { isOpen, setIsOpen } = useContext(TodoContext) as TodoContextType;
  const handleFormOpen = () => {
    console.log("isopen", isOpen);
    setIsOpen(true);
  };
  return (
    <div className="h-1/4 flex items-center justify-between mx-10">
      <input
        type="text"
        placeholder="Search Todo"
        className="w-3/4 p-2 rounded-md outline-none"
      />
      <Button
        text="Add new Item"
        tailwindClasses="bg-white"
        clickButton={handleFormOpen}
      />
    </div>
  );
};

export default SearchFilter;
