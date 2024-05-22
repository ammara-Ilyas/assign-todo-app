"use client";
import React from "react";

interface CheckboxProps {
  important: boolean;
  onChangeHandler: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ important, onChangeHandler }) => {
  return (
    <span className="border-[1px] rounded-full w-[14px] h-[14px] flex items-center justify-center">
      <input
        type="checkbox"
        className="appearance-none w-full h-full border-none rounded-full checked:bg-purple-400 checked:border-transparent"
        checked={important}
        onChange={onChangeHandler}
      />
    </span>
  );
};

export default Checkbox;
