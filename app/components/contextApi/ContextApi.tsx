"use client";
import React, { createContext, useState } from "react";
import { TodoContextType } from "../types/Types";
export let TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [todoList, setTodoList] = useState<String[]>([]);
  //   const addTodo = (todo: string) => {
  //     setTodos((prevTodos) => [...prevTodos, todo]);
  //   };
  return (
    <TodoContext.Provider value={{ todoList }}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
