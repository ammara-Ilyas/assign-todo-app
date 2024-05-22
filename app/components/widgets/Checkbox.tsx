import React from "react";

const Checkbox = () => {
  return (
    <span className="border-[1px] rounded-full w-4 h-4 flex items-center justify-center">
      <input
        type="checkbox"
        className="appearance-none w-full h-full border-none rounded-full checked:bg-purple-400 checked:border-transparent"
      />
    </span>
  );
};

export default Checkbox;
