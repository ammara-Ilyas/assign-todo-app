import React from "react";

export interface ListType {
  text: string;
  icon: React.ReactNode;
}
export interface ButtonType {
  text: string | React.ReactNode;
  tailwindClasses?: string;
  clickButton?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface Todo {
  id: number;
  todo: string;
  todoDes: string;
  isImportant: boolean;
}
export interface TodoContextType {
  todoList: Todo[];
  addTodo: (todo: string, todoDes: string) => void;
  deleteTodo: (id: Number) => void;
  editTodo: (id: Number) => void;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}
