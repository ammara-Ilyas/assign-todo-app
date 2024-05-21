import React from "react";
import { SiTodoist } from "react-icons/si";

const Button = () => {
  return (
    <div>
      <ul className="border-2 w-[75%] ml-auto flex flex-col gap-2">
        <li>All Tasks</li>
        <li>Important </li>
        <li>Unimportant </li>
      </ul>
    </div>
  );
};

export default Button;
