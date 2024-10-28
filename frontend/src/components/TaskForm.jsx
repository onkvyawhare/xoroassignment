
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks, currentTask, setCurrentTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [currentTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentTask) {
      await axios.put(`https://xoroassignment.onrender.com/tasks/${currentTask._id}`, { title, description });
    } else {
      await axios.post('https://xoroassignment.onrender.com/tasks', { title, description });
    }
    fetchTasks();
    setCurrentTask(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        {currentTask ? 'Edit Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;

