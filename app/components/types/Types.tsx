import React from "react";

export interface TodoContextType {
  todoList: String[];
  //   addTodo: (todo: string) => void;
}
export interface ListType {
  text: string;
  icon: React.ReactNode;
}
export interface ButtonType {
  text: string | React.ReactNode;
  tailwindClasses?: string;
}
