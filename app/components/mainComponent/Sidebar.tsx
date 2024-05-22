import React from "react";
import Aside from "./Aside";
import Image from "next/image";
import avtar from "@/public/images/avatar .png";
import { SiTodoist } from "react-icons/si";
import Button from "../widgets/Tasks";
import Lists from "../widgets/Lists";
const Sidebar = () => {
  return (
    <div className="w-[93%] h-[90%] z-30  rounded-2xl bg-white flex items-center ">
      <div className="flex  gap-10 h-full w-[25%] mt-10  flex-col ">
        <div className=" border-b-purple-500 border-b-[3px] w-[70%]  h-[20%] mx-auto flex justify-center gap-3 items-center">
          <Image
            src={avtar}
            alt="Avatar"
            className="w-[60px] h-[60px] rounded-full"
          />
          <div className="">
            <p className="font-bold">Do-it</p>
            <p className="text-purple-600">Ammara Ilyas</p>
          </div>
        </div>
        <div className="border-2">
          <ul className="border-2 w-[85%] mx-auto flex flex-col gap-3">
            <li>
              <Lists
                text="Today Tasks"
                icon={
                  <SiTodoist className="text-gray-400 hover:text-blue-500" />
                }
              />
            </li>
            <li>
              <Button />
            </li>
            <li>
              <Lists
                text="Schedule Tasks"
                icon={
                  <SiTodoist className="text-gray-400 hover:text-blue-500" />
                }
              />
            </li>
            <li>
              <Lists
                text="Setting"
                icon={
                  <SiTodoist className="text-gray-400 hover:text-blue-500" />
                }
              />
            </li>
          </ul>
        </div>
      </div>

      <Aside />
    </div>
  );
};

export default Sidebar;
