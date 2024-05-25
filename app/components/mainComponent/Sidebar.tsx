"use client";
import React, { useState } from "react";
import Aside from "./Aside";
import Image from "next/image";
import avtar from "@/public/images/avatar .png";
import { SiTodoist } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { GrSchedulePlay } from "react-icons/gr";
import Button from "../widgets/Tasks";
import Lists from "../widgets/Lists";
interface SidebarType {
  isOpen: boolean;
}
const Sidebar: React.FC<SidebarType> = ({ isOpen }) => {
  return (
    <div className="w-[95%] mr-4 md:mr-0 relative sm:w-[93%] h-[90%]  mt-10 lg:mr-10 rounded-2xl bg-white flex items-center  mx-auto">
      {isOpen ? (
        <div className="block md:hidden duration-700 bg-opacity-100  w-[70%] sm:w-[50%] absolute left-0 top-0 h-screen z-50  bg-white">
          <div className=" flex  gap-10 h-full w-full   mt-10  flex-col ">
            <div className=" border-b-purple-500 border-b-[3px] w-[90%] xl:w-[80%]   h-[20%] mx-auto flex justify-center gap-3 items-center">
              <Image
                src={avtar}
                alt="Avatar"
                className="w-[60px] h-[60px] rounded-full "
              />
              <div className="">
                <p className="font-bold">Do-it</p>
                <p className="text-purple-600 ">Ammara Ilyas</p>
              </div>
            </div>
            <div className="">
              <ul className=" w-[85%] mx-auto flex flex-col gap-3">
                <li>
                  <Lists text="Today Tasks" icon={<SiTodoist />} />
                </li>
                <li>
                  <Button />
                </li>
                <li>
                  <Lists text="Schedule Tasks" icon={<GrSchedulePlay />} />
                </li>
                <li>
                  <Lists text="Setting" icon={<IoSettingsSharp />} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className=" w-[32%] xl:w-[25%]  h-full hidden md:block">
        <div className="flex  gap-10 h-full w-full   mt-10  flex-col  ">
          <div className=" border-b-purple-500 border-b-[3px] w-[90%] xl:w-[80%]   h-[20%] mx-auto flex justify-center gap-3 items-center">
            <Image
              src={avtar}
              alt="Avatar"
              className="w-[60px] h-[60px] rounded-full "
            />
            <div className="">
              <p className="font-bold">Do-it</p>
              <p className="text-purple-600 ">Ammara Ilyas</p>
            </div>
          </div>
          <div className="">
            <ul className=" w-[85%] mx-auto flex flex-col gap-3">
              <li>
                <Lists text="Today Tasks" icon={<SiTodoist />} />
              </li>
              <li>
                <Button />
              </li>
              <li>
                <Lists text="Schedule Tasks" icon={<GrSchedulePlay />} />
              </li>
              <li>
                <Lists text="Setting" icon={<IoSettingsSharp />} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Aside />{" "}
    </div>
  );
};

export default Sidebar;
