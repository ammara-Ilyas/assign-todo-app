import React from "react";
import { ButtonType } from "../types/Types";
const Button: React.FC<ButtonType> = ({
  text,
  tailwindClasses = "bg-blue-500",
}) => {
  return (
    <button className={`${tailwindClasses}  p-2 rounded-md `}>{text}</button>
  );
};

export default Button;
