"use client";
import React, { createContext, useState } from "react";
import { TodoContextType, Todo } from "../types/Types";
export let TodoContext = createContext<TodoContextType | undefined | void>(
  undefined
);

const TodoProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [todo, setTodo] = useState<string>("");
  const [todoDes, setTodoDes] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodo = (todo: string, todoDes: string) => {
    if (todo.trim() !== "" || todoDes.trim() !== "") {
      setTodoList([
        ...todoList,
        {
          id: Math.floor(Math.random() * 1000000),
          todo,
          todoDes,
          isImportant: false,
        },
      ]);
      // setIsEmpty(false);
    } else {
      // setIsEmpty(true);
      // setTimeout(() => {
      //   setIsEmpty(false);
      // }, 2000);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
