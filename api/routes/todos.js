const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router()

// @route: GET /api/todos/test
// @description: tests todos route
router.get('/test', (req, res) => res.send('Todos testing!'))

// @route: GET /api/todos
// @description: Get all todos
router.get('/', (req, res) => {
    // Todo.find() will return all the data, exposing only the id and action field to the client    
    Todo.find({}, 'action')
        .then(todos => res.json(todos))
        .catch(err => res.status(404).json({ notodosfound: 'No Todos found' }));
})

// @route: GET api/todos/:id
// @description: Get todo by id
router.get('/:id', (req, res) => {
    //Todo.findOne({ "_id": req.params.id })
    Todo.findOne({ "_id": req.params.id }, 'action') // remove other fields except for '_id' and 'action'
        .then(todo => res.json(todo))
        .catch(err => res.status(404).json({ error: 'No such a todo' }))
})


// @route: POST /api/todos
// @description: Create todo
router.post('/', (req, res) => {
    if (req.body.action) {
        Todo.create(req.body)
            .then(todo => res.json({ msg: 'Todo added successfully' }))
            .catch(err => res.status(400).json({ error: 'Unable to add this todo' }));
    } else {
        res.status(400).json({ error: "The input field is empty" })
    }
})

// @route: DELETE api/todos/:id
// @description: Delete todo by id
router.delete('/:id', (req, res) => {
    Todo.findOneAndDelete({ "_id": req.params.id })
        .then(todo => res.json({ msg: 'Todo entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a todo' }))
})

module.exports = router;