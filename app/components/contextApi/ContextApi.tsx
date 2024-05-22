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
  const [isOpen, setIsOpen] = useState<Boolean>(false);
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
  const deleteTodo = (id: Number) => {
    const updatedTodos = todoList.filter((item) => {
      return item.id !== id;
    });
    console.log("update", updatedTodos);

    setTodoList(updatedTodos);
  };
  const editTodo = (id: Number) => {
    const item = todoList.find((item) => {
      return item.id === id;
    });
    // setTodo(item.name);
    // setToggle(false);
    // setEditTodo(id);
    // setEditPlaceholder(false);
  };
  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        addTodo,
        isOpen,
        setIsOpen,
        deleteTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
