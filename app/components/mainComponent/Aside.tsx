import React from "react";
import Search from "./Search";
import Lists from "./TodoLists";
import SearchFilter from "./SearchFilter";
const Aside = () => {
  return (
    <div className="w-3/4 h-[99%] relative bg-blue-500 rounded-2xl ml-auto mr-[3px]">
      <Search />
      <SearchFilter />
      <Lists />
    </div>
  );
};

export default Aside;
