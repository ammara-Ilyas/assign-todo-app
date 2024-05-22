"use client";
import React, { createContext, useState } from "react";
import { TodoContextType, Todo } from "../types/Types";
export const TodoContext = React.createContext<TodoContextType | undefined>(
  undefined
);

const TodoProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [todo, setTodo] = useState<string>("");
  const [todoDes, setTodoDes] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [editTodoId, setEditTodoId] = useState<number>(0);
  const addTodo = () => {
    if (todo.trim() !== "" || todoDes.trim() !== "") {
      const newTodo: Todo = {
        id: Math.floor(Math.random() * 1000000),
        todo: todo,
        todoDes: todoDes,
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
  const deleteTodo = (id: number) => {
    const updatedTodos = todoList.filter((item) => {
      return item.id !== id;
    });
    console.log("update", updatedTodos);

    setTodoList(updatedTodos);
  };
  const editTodo = (id: number) => {
    const item = todoList.find((item) => {
      return item.id === id;
    });
    console.log("item", item);

    if (item) {
      setTodo(item.todo);
      setTodoDes(item.todoDes);
      setIsEdit(true);
      setEditTodoId(id);
      console.log("idedit", editTodoId);

      // setToggle(false);
      // setEditTodo(id);
      // setEditPlaceholder(false);
    }
  };
  const saveTodo = () => {
    const index = todoList.findIndex((item) => {
      return item.id === editTodoId;
    });
    let updatedTodos = [...todoList];
    updatedTodos[index].todo = todo;
    updatedTodos[index].todoDes = todoDes;
    setTodoList(updatedTodos);
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
        todo,
        setTodo,
        todoDes,
        setTodoDes,
        isEdit,
        setIsEdit,
        saveTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
