import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const id = Date.now();
    setTodos((prevTodos) => [{ id, ...todo }, ...prevTodos]);
  };

  const updateTodo = (todo, id) => {};
  const deleteTodo = (id) => {};
  const toggleComplete = (id) => {};

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <TodoItem />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
