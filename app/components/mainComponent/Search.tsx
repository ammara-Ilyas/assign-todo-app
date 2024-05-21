import React from "react";
import Button from "../widgets/Button";
const Search = () => {
  return (
    <div className="h-full w-full hidden">
      {" "}
      <div className="flex items-center h-full">
        <div className=" h-[60%] w-1/2 mx-auto rounded-md gap-10 p-4 bg-white flex flex-col justify-center ">
          <input
            type="text"
            className=" border-2 outline-none p-2 placeholder:text-sm"
            placeholder="Write todo"
          />
          <textarea
            name="s"
            id=""
            className="border-2 outline-none p-2 placeholder:text-sm"
            rows={5}
            placeholder="Write description"
          ></textarea>
          <Button text="Add Item" />
        </div>
      </div>
    </div>
  );
};

export default Search;
