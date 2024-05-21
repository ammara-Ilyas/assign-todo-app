import React from "react";
import Sidebar from "./Sidebar";
const SecMain = () => {
  return (
    <div className="w-[85%] relative flex items-center justify-center h-[99vh] mr-16 ml-auto overflow-hidden bg-gradient-to-t from-indigo-400 to-blue-500 ... ">
      <div className="w-[150px] h-[150px] rounded-full z-0 bg-yellow-400 absolute bottom-[40%] -right-16 "></div>
      <div className="w-[200px] h-[200px] z-40 bg-red-300 rounded-full absolute -bottom-14 -left-32 "></div>
      <Sidebar />
    </div>
  );
};

export default SecMain;
