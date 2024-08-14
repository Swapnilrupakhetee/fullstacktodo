import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import Navbar from './Navbar';
import { MdOutlineWork } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { MdAddToPhotos } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
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
  const [issuedDate, setIssuedDate] = useState('');

  useEffect(() => {
    localStorage.setItem(`todos-${projectName}`, JSON.stringify(todos));
  }, [todos, projectName]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTask = {
        name: newTodo,
        issuedDate: new Date().toLocaleDateString(),  // Setting the current date
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
        ? { ...todo, name: newTodo, endDate, priority, status: todo.status }
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

  const changeStatus = (index, newStatus) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index
        ? { ...todo, status: newStatus }
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
    setIssuedDate(todo.issuedDate); // Set issuedDate for display in the edit modal
    setShowEditModal(true);
  };

  return (
    <div className="project-details">
      <Navbar />
      <div className='project-title-todo'>{projectName} <BsStars className='work' /></div>
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
                <GoSearch className='sea' />
              </div>
            </div>
            <button className="addtodo" onClick={() => setShowAddModal(true)}><MdAddToPhotos /></button>
          </div>

          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                <div className='list-container'>
                  <strong>{todo.name}</strong>
                  <div>End Date: {todo.endDate}</div>
                  <div className="todo-right-container">
                  <div>
                   
                    <select
                      value={todo.status}
                      onChange={(e) => changeStatus(index, e.target.value)}
                      className='todo-select'
                    >
                      <option value="in progress" className='value1'><GoDotFill style={{color:'red',fontSize:'2rem'}} /> In Progress</option>
                      <option value="completed" className='value2'><GoDotFill style={{color:'red',fontSize:'2rem'}} /> Completed <GoDotFill /></option>
                    </select>
                  </div>
                  <button onClick={() => openEditModal(index)} ><MdOutlineModeEditOutline className='edit'/></button>
                  <button onClick={() => deleteTodo(index)}><TiDeleteOutline className='delete'/></button>
                </div>

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
        <div className="modal1">
          <div className="modal1-content">
            <h2>Add New To-Do</h2>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter task name"
            />
            <div className="custom-date-input">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End date"
              />
            </div>

            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="low">Low</option>
              <option value="mid">Mid</option>
              <option value="high">High</option>
            </select>
            <div className="modal-buttons">
              <button onClick={addTodo} className='modaladd'>Add To-Do</button>
              <button onClick={() => setShowAddModal(false)} className='modalcancel'>Cancel</button>
            </div>

          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal1">
          <div className="modal1-content">
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
            <div className='issued'>
              <IoTimeOutline className='dates' /> {issuedDate}  {/* Display the issued date only in the edit modal */}
            </div>
            <div className="modal-buttons">
              <button onClick={editTodo} className='modaladd'>Save Changes</button>
              <button onClick={() => setShowEditModal(false)} className='modalcancel'>Cancel</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
