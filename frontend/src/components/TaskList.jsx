
import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, fetchTasks, setCurrentTask }) => {
  const handleDelete = async (id) => {
    await axios.delete(`https://xoroassignment.onrender.com/tasks/${id}`);
    fetchTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id} className="border border-gray-300 p-4 mb-2 rounded">
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-gray-700">{task.description}</p>
          <div className="mt-2">
            <button
              onClick={() => setCurrentTask(task)}
              className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
