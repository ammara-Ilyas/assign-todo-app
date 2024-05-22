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
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: Math.floor(Math.random() * 1000000),
      todo: "First todo",
      todoDes: "Todo description",
      isImportant: false,
    },
    {
      id: Math.floor(Math.random() * 1000000),
      todo: "First todo",
      todoDes: "Todo description",
      isImportant: false,
    },
  ]);
  const [todoData, setTodoData] = useState<Todo[]>([]);

  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [editTodoId, setEditTodoId] = useState<number>(0);
  const addTodo = () => {
    if (todo.trim() !== "" && todoDes.trim() !== "") {
      const newTodo: Todo = {
        id: Math.floor(Math.random() * 1000000),
        todo: todo,
        todoDes: todoDes,
        isImportant: false,
      };
      todoList.push(newTodo);
      setTodoData([...todoList]);
      console.log(todoList);
    } else {
      alert("write todo");
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
    setTodoData(updatedTodos);
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
    setTodoData(updatedTodos);
  };
  const handleCheckbox = (id: number) => {
    const index = todoList.findIndex((item) => item.id === id);
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = {
      ...updatedTodoList[index],
      isImportant: !updatedTodoList[index].isImportant,
    };
    console.log("update", updatedTodoList);

    setTodoList(updatedTodoList);
    setTodoData(updatedTodoList);
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
        handleCheckbox,
        todoData,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
