import React, { useState } from "react";
import TodoList from "./comp/TodoList.jsx";
import TodoForm from "./comp/TodoForm.jsx";
import "./comp/Styles.css";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, date) => {
    setTodos([...todos, { text, date, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
