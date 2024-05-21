import React from "react";
import { SiTodoist } from "react-icons/si";
import Checkbox from "./Checkbox";
const Button = () => {
  return (
    <div>
      <ul className="border-2 w-[75%] ml-auto flex flex-col gap-2">
        <li className="flex items-center gap-1">
          <Checkbox /> All Tasks
        </li>
        <li className="flex items-center gap-1">
          <Checkbox /> Important{" "}
        </li>
        <li className="flex items-center gap-1">
          <Checkbox /> Unimportant{" "}
        </li>
      </ul>
    </div>
  );
};

export default Button;
