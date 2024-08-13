import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectName } = useParams(); // Get the project name from the URL
  const [todos, setTodos] = useState(() => {
    // Load the saved to-dos from localStorage when the component mounts
    const savedTodos = localStorage.getItem(`todos-${projectName}`);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Save the to-dos to localStorage whenever the `todos` state changes
    localStorage.setItem(`todos-${projectName}`, JSON.stringify(todos));
  }, [todos, projectName]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      // Add the new to-do to the list and reset the input field
      setTodos([...todos, { name: newTodo }]);
      setNewTodo('');
    }
  };

  return (
    <div className="project-details">
      <h1>{projectName}</h1>
      <div className="todo-list">
        <h2>To-Do List</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new to-do"
        />
        <button onClick={addTodo}>Add To-Do</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetails;
