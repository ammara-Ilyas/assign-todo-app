"use client";
import React, { useContext, useState } from "react";
import Checkbox from "../widgets/Checkbox";
import Button from "../widgets/Button";
import { TodoContext } from "../contextApi/ContextApi";
////////import icons////////////////////////
import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

const TodoLists: React.FC = () => {
  const [openTodoId, setOpenTodoId] = useState<number | null>(null);
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoLists must be used within a TodoContext.Provider");
  }

  const { todoList, deleteTodo, editTodo, setIsOpen, handleCheckbox } =
    todoContext;
  const handleDeleteTodo = (id: number) => {
    console.log(id);
    deleteTodo(id);
  };
  const handleEditTodo = (id: number) => {
    console.log(id);
    editTodo(id);
    setIsOpen(true);
  };
  const handleDesToggle = (id: number) => {
    setOpenTodoId((prevId) => (prevId === id ? null : id));
  };
  const handleCheckboxChange = (id: number) => {
    console.log(id);

    handleCheckbox(id);
  };
  return (
    <div className=" w-[60%] mx-auto overflow-y-auto h-[70%] p-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white scrollbar-corner-rounded-full	scrollbar-corner-blue-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
      {todoList.map((item, i) => (
        <div key={item.id} className="flex flex-col  w-full my-3">
          <div className=" bg-white w-[95%] flex items-center justify-between  py-2 text-xl px-3 h-[35px] rounded-md">
            <div className="flex items-center justify-center gap-2 ">
              {" "}
              <Checkbox
                important={item.isImportant}
                onChangeHandler={() => handleCheckboxChange(item.id)}
              />
              <p className="text-xl">{item.todo}</p>
            </div>
            <div className="flex items-center justify-center gap-3  h-full text-white">
              <Button
                text={<MdEditNote className="hover:text-slate-200 text-sm" />}
                tailwindClasses="bg-blue-500 p-[4px] rounded-full"
                clickButton={() => handleEditTodo(item.id)}
              />
              <Button
                text={<MdDelete className="hover:text-slate-200   text-sm" />}
                tailwindClasses="bg-blue-500 p-[4px] rounded-full"
                clickButton={() => handleDeleteTodo(item.id)}
              />
              <Button
                text={
                  <FaAngleDown className="hover:text-slate-200   text-sm" />
                }
                tailwindClasses="bg-blue-500 p-[4px] rounded-full"
                clickButton={() => handleDesToggle(item.id)}
              />
            </div>
          </div>
          <div
            className={` min-h-20 bg-white py-2 px-3 w-[95%] rounded-md ml-auto  mt-2 ${
              openTodoId === item.id ? "block" : "hidden"
            }`}
          >
            <p>{item.todoDes}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
