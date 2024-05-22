"use client";
import React, { useContext } from "react";
import Checkbox from "../widgets/Checkbox";
import Button from "../widgets/Button";
import { TodoContext } from "../contextApi/ContextApi";
////////import icons////////////////////////
import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TodoLists: React.FC = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoLists must be used within a TodoContext.Provider");
  }

  const { todoList, deleteTodo, editTodo, setIsOpen } = todoContext;
  const handleDeleteTodo = (id: number) => {
    console.log(id);
    deleteTodo(id);
  };
  const handleEditTodo = (id: number) => {
    console.log(id);
    editTodo(id);
    setIsOpen(true);
  };

  return (
    <div className=" w-[60%] mx-auto overflow-y-auto h-[70%] p-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-white scrollbar-corner-rounded-full	scrollbar-corner-red-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full border-2 border-blue-500 ">
      {todoList.map((item, i) => (
        <div
          key={item.id}
          className="border-2 w-full my-3 bg-white  flex items-center justify-between  py-2 text-xl px-3 h-[45px]"
        >
          <div className="flex items-center justify-center gap-2 ">
            {" "}
            <Checkbox />
            <p className="text-xl">{item.todo}</p>
          </div>
          <div className="flex items-center justify-center gap-4 h-full text-white">
            <Button
              text={<MdEditNote className="hover:text-slate-200 text-sm" />}
              tailwindClasses="bg-blue-500 p-1"
              clickButton={() => handleEditTodo(item.id)}
            />
            <Button
              text={<MdDelete className="hover:text-slate-200   text-sm" />}
              tailwindClasses="bg-blue-500 p-1"
              clickButton={() => handleDeleteTodo(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
