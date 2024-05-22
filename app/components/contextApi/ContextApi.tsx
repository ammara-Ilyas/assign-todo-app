"use client";
import React, { createContext, useState } from "react";
import { TodoContextType, Todo } from "../types/Types";
export const TodoContext = React.createContext<TodoContextType | undefined>(
  undefined
);

const TodoProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodo = (todo: string, todoDes: string) => {
    if (todo.trim() !== "" || todoDes.trim() !== "") {
      const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        todo,
        todoDes,
        isImportant: false,
      };
      todoList.push(newTodo);
      // setTodoList([...todoList, newTodo]);
      console.log(todoList);

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
