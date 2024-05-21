import React from "react";
import Checkbox from "../widgets/Checkbox";
import Button from "../widgets/Button";
////////import icons
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoLists = () => {
  return (
    <div className=" w-[60%] mx-auto overflow-y-scroll h-[70%]">
      <div className="border-2 w-full my-2 bg-white  flex items-center justify-between  py-2 text-xl px-3 h-[45px]">
        <div className="flex items-center justify-center gap-2 ">
          {" "}
          <Checkbox />
          <p className="text-xl">add new</p>
        </div>
        <div className="flex items-center justify-center gap-4 h-full text-white">
          <Button text={<FaEdit className="hover:text-slate-200" />} />
          <Button text={<MdDelete className="hover:text-slate-200" />} />
        </div>
      </div>
      <div className="border-2 w-full bg-white  flex items-center justify-between  py-2 text-xl px-3 h-[45px]">
        <div className="flex items-center justify-center gap-2 ">
          {" "}
          <Checkbox />
          <p className="text-xl">add new</p>
        </div>
        <div className="flex items-center justify-center gap-4 h-full text-white">
          <Button text={<FaEdit className="hover:text-slate-200" />} />
          <Button text={<MdDelete className="hover:text-slate-200" />} />
        </div>
      </div>
    </div>
  );
};

export default TodoLists;
