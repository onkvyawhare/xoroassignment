
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware cors

app.use(cors({
    origin: "https://xoroassignment.vercel.app"
}));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
