"use client";
import { useLocalStorage } from "@component/hooks/useLocalStorage";
import {
  createContext,
  useContext,
  //  useEffect, useState
} from "react";
import { v4 as uuid } from "uuid";


//crear context
export const TaskContext = createContext();

//custom hook
export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context)
    throw new Error("Deberia estar siendo usado dentro de un provider");
  return context;
};

//provider
export const TaskProvider = ({ children }) => {

  //del custom hook
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {

  //   const item = localStorage.getItem("tasks");
  //   const tasks = JSON.parse(item);
  //   // console.log(tasks);
  //   if (tasks.length > 0) {
  //     setTasks(tasks);
  //   }

  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  //create
  const createTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuid() }]);
  };
  // delete
  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };
  //update
  const updateTask = (id, newData) => {
    setTasks([
      ...tasks.map((task) => (task.id === id ? { ...task, ...newData } : task)),
    ]);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
