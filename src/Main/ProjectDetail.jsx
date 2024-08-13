import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import Navbar from './Navbar';
import { MdOutlineWork } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { MdAddToPhotos } from "react-icons/md";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(`todos-${projectName}`);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priority, setPriority] = useState('low');
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem(`todos-${projectName}`, JSON.stringify(todos));
  }, [todos, projectName]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTask = {
        name: newTodo,
        issuedDate: new Date().toLocaleString(),
        endDate,
        priority,
        status: 'in progress',
      };
      setTodos([...todos, newTask]);
      setNewTodo('');
      setEndDate('');
      setPriority('low');
      setShowAddModal(false); // Close the modal after adding
    }
  };

  const editTodo = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === currentEditIndex
        ? { ...todo, name: newTodo, endDate, priority }
        : todo
    );
    setTodos(updatedTodos);
    setShowEditModal(false);
    setNewTodo('');
    setEndDate('');
    setPriority('low');
    setCurrentEditIndex(null);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const changeStatus = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index
        ? { ...todo, status: todo.status === 'in progress' ? 'completed' : 'in progress' }
        : todo
    );
    setTodos(updatedTodos);
  };

  const openEditModal = (index) => {
    const todo = todos[index];
    setCurrentEditIndex(index);
    setNewTodo(todo.name);
    setEndDate(todo.endDate);
    setPriority(todo.priority);
    setShowEditModal(true);
  };

  return (
    <div className="project-details">
        <Navbar/>
      <div className='project-title-todo'>{projectName} <BsStars className='work'/></div>
      <div className="mid-contents">
      <div className="todo-list">

        <div className="todo-top">
        <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          <div className="search-button">
          <GoSearch className='sea'/>
          </div>
        </div>
        <button className="addtodo" onClick={() => setShowAddModal(true)}><MdAddToPhotos /></button>
        </div>
       
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <div>
                <strong>{todo.name}</strong>
                <div>Issued: {todo.issuedDate}</div>
                <div>End Date: {todo.endDate}</div>
                <div>Priority: {todo.priority}</div>
                <div>Status: <strong>{todo.status}</strong></div>
                <button onClick={() => changeStatus(index)}>
                  Mark as {todo.status === "in progress" ? "Completed" : "In Progress"}
                </button>
                <button onClick={() => openEditModal(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="music-right">
            <iframe
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6QDedCAYqRI?utm_source=generator"
                width="100%"
                height="500"
                frameBorder="0"
                allow="encrypted-media"
                title="Best UK Drill Playlist"
                style={{ borderRadius: '12px' }}
            ></iframe>
        </div>
      </div>
     


      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New To-Do</h2>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter task name"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End date"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="low">Low</option>
              <option value="mid">Mid</option>
              <option value="high">High</option>
            </select>
            <button onClick={addTodo}>Add To-Do</button>
            <button onClick={() => setShowAddModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit To-Do</h2>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter task name"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End date"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="low">Low</option>
              <option value="mid">Mid</option>
              <option value="high">High</option>
            </select>
            <button onClick={editTodo}>Save Changes</button>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
