import React from "react";
import { SiTodoist } from "react-icons/si";
import Checkbox from "./Checkbox";
const Button = () => {
  return (
    <div>
      <ul className="border-2 w-[75%] ml-auto flex flex-col gap-2">
        <li className="flex items-center gap-1">
          <span className="w-[15px] h-[15px] rounded-full bg-blue-400 hover:bg-purple-500 active:bg-purple-500 "></span>
          All Tasks
        </li>
        <li className="flex items-center gap-1">
          <span className="w-[15px] h-[15px] rounded-full bg-blue-400 hover:bg-purple-500 active:bg-purple-500 "></span>
          Important{" "}
        </li>
        <li className="flex items-center gap-1">
          <span className="w-[15px] h-[15px] rounded-full bg-blue-400 hover:bg-purple-500 active:bg-purple-500 "></span>
          Unimportant{" "}
        </li>
      </ul>
    </div>
  );
};

export default Button;
