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
      <h2 className="text-4xl border-b-2 ml-20 border-b-white pb-1 text-white font-bold">
        Todo List
      </h2>
      <Button
        text="Add new Item"
        tailwindClasses="bg-white rounded-md"
        clickButton={handleFormOpen}
      />
    </div>
  );
};

export default SearchFilter;
