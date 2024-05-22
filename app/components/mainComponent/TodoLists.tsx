"use client";
import React, { useContext } from "react";
import Checkbox from "../widgets/Checkbox";
import Button from "../widgets/Button";
import { TodoContext } from "../contextApi/ContextApi";
////////import icons////////////////////////
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoLists: React.FC = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoLists must be used within a TodoContext.Provider");
  }

  const { todoList, deleteTodo } = todoContext;
  const handleDeleteTodo = (id: Number) => {
    console.log(id);
    deleteTodo(id);
  };
  const handleEditTodo = (id: Number) => {};

  return (
    <div className=" w-[60%] mx-auto overflow-y-scroll h-[70%]">
      {todoList.map((item, i) => (
        <div
          key={item.id}
          className="border-2 w-full my-2 bg-white  flex items-center justify-between  py-2 text-xl px-3 h-[45px]"
        >
          <div className="flex items-center justify-center gap-2 ">
            {" "}
            <Checkbox />
            <p className="text-xl">{item.todo}</p>
          </div>
          <div className="flex items-center justify-center gap-4 h-full text-white">
            <Button
              text={<FaEdit className="hover:text-slate-200" />}
              clickButton={() => handleEditTodo(item.id)}
            />
            <Button
              text={<MdDelete className="hover:text-slate-200" />}
              clickButton={() => handleDeleteTodo(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
