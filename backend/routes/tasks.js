// backend/routes/tasks.js
const express = require('express');
const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

// Get all tasks
router.get('/', getTasks);

// Create a new task
router.post('/', createTask);

// Update a task by ID
router.put('/:id', updateTask);

// Delete a task by ID
router.delete('/:id', deleteTask);

module.exports = router;
