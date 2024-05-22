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
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todoDes: string;
  setTodoDes: React.Dispatch<React.SetStateAction<string>>;
  todoList: Todo[];
  todoData: Todo[];
  addTodo: () => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number) => void;
  saveTodo: () => void;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  isEdit: Boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<Boolean>>;
  handleCheckbox: (id: number) => void;
}
