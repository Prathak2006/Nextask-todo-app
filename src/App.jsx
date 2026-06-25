import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";

import TaskTracker from './Components/TaskTracker';
import TodoList from "./components/TodoList";
import { useEffect } from 'react';

// import './App.css'

function App() {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme =
      localStorage.getItem("theme");

    return savedTheme
      ? JSON.parse(savedTheme)
      : false;
  });

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  useEffect(() => {
    localStorage.setItem(
      "theme",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  const addTodo = (text, priority) => {
    const newTodo = {
      id: uuidv4(),
      text,
      isDone: false,
      priority,
      createdAt: new Date().toLocaleDateString()
    }
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
  }

  const editTodo = (id, updatedText) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, text: updatedText } : todo));
  }
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className='bg-[#F5F5F5] min-h-screen  dark:bg-gray-900 p-5 '>

          <div className='w-full md:w-3/4 mx-auto bg-[#F7F4EC] text-black dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 dark:text-white sm:p-4'>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <AddTodo addTodo={addTodo} />
          </div>

          
            <TaskTracker filter={filter} setFilter={setFilter} todos={todos} />
          


          <TodoList
            todos={todos}
            filter={filter}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            setFilter={setFilter}
          />


        </div>
      </div>

    </>
  )
}

export default App
