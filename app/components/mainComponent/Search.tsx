"use client";
import React, { useContext, useState } from "react";
import Button from "../widgets/Button";
import { TodoContextType } from "../types/Types";
import { TodoContext } from "../contextApi/ContextApi";
const Search = () => {
  const [todo, setTodo] = useState("");
  const [todoDes, setTodoDes] = useState("");

  const todoContext = useContext(TodoContext) as TodoContextType;
  const addTodo = todoContext?.addTodo;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("todo", todo);
    console.log("destodo", todoDes);

    console.log("clicked");

    addTodo(todo, todoDes);
  };
  return (
    <div className="h-full w-full ">
      {" "}
      <div className="flex items-center h-full">
        <form
          className=" h-[60%] w-1/2 mx-auto rounded-md gap-10 p-4 bg-white flex flex-col justify-center "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className=" border-2 outline-none p-2 placeholder:text-sm capitalize"
            placeholder="Write todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <textarea
            name=""
            id=""
            className="border-2 outline-none p-2 placeholder:text-sm"
            rows={5}
            placeholder="Write description"
            value={todoDes}
            onChange={(e) => setTodoDes(e.target.value)}
          ></textarea>

          <Button
            text="Add Item"
            tailwindClasses="bg-blue-300"
            clickButton={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
