import React from "react";
import { ButtonType } from "../types/Types";
const Button: React.FC<ButtonType> = ({ text }) => {
  return <button className="bg-blue-500 p-2">{text}</button>;
};

export default Button;
