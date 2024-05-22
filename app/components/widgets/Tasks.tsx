"use client";
import React, { useContext, useState } from "react";
import { TodoContext } from "../contextApi/ContextApi";
const Button = () => {
  const todoContext = useContext(TodoContext);
  const [activeItem, setActiveItem] = useState<string>("all");

  if (!todoContext) {
    throw new Error("TodoLists must be used within a TodoContext.Provider");
  }

  const { todoData, setTodoList } = todoContext;
  const handleAll = () => {
    setTodoList(todoData);
    setActiveItem("all");
  };
  const handleImportant = () => {
    const importantTodos = todoData.filter(
      (item) => item.isImportant !== false
    );
    console.log(importantTodos);

    setTodoList(importantTodos);
    setActiveItem("important");
  };
  const handleOther = () => {
    const otherTodos = todoData.filter((item) => item.isImportant == false);
    console.log(otherTodos);

    setTodoList(otherTodos);
    setActiveItem("other");
  };
  const getItemClasses = (item: string) =>
    `w-[12px] h-[12px] rounded-full ${
      activeItem === item ? "bg-purple-500" : "bg-blue-400"
    } hover:bg-purple-500 active:bg-purple-500`;

  return (
    <div>
      <ul className="border-2 w-[75%] ml-auto flex flex-col gap-2">
        <li
          className="flex items-center gap-2  cursor-pointer"
          onClick={handleAll}
        >
          <span className={getItemClasses("all")}></span>
          All Tasks
        </li>
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleImportant}
        >
          <span className={getItemClasses("important")}></span>
          Important{" "}
        </li>
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleOther}
        >
          <span className={getItemClasses("other")}></span>
          Other{" "}
        </li>
      </ul>
    </div>
  );
};

export default Button;
