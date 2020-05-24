const express = require('express');
var cors = require('cors');
require('dotenv').config();
const connectDB = require('./utils/db');
const todos = require('./routes/todos');
const Todo = require('./models/Todo');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// Root
app.get('/', (req, res) => res.send('MERN stack API with Vercel'));

// use Routes
app.use('/api', todos);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));