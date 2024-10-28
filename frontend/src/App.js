

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchBar from './components/Searchbar';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  //detching task
  const fetchTasks = async () => {
    const response = await axios.get('https://xoroassignment.onrender.com/tasks');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskForm fetchTasks={fetchTasks} currentTask={currentTask} setCurrentTask={setCurrentTask} />
      <TaskList tasks={filteredTasks} fetchTasks={fetchTasks} setCurrentTask={setCurrentTask} />
    </div>
  );
};

export default App;
