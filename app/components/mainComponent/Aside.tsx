import React from "react";
import Search from "./Search";
import Lists from "./TodoLists";
import SearchFilter from "./SearchFilter";
const Aside = () => {
  return (
    <div className="w-3/4 h-[98%] bg-blue-500 rounded-2xl ml-auto mr-[6px]">
      <Search />
      <SearchFilter />
      <Lists />
    </div>
  );
};

export default Aside;
