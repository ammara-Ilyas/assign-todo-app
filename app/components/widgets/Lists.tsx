import React from "react";
import { ListType } from "../types/Types";
const Lists: React.FC<ListType> = ({ text, icon }) => {
  return (
    <div className="flex gap-4 border-2 items-center font-semibold ">
      {/* <SiTodoist className="text-gray-300" /> */}
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Lists;
