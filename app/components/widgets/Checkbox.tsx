import React from "react";

const Checkbox = () => {
  return (
    <span className="border-2 rounded-full w-4 h-4 flex items-center justify-center">
      <input
        type="checkbox"
        className="appearance-none w-full h-full border-none rounded-full checked:bg-yellow-500 checked:border-transparent"
      />
    </span>
  );
};

export default Checkbox;
