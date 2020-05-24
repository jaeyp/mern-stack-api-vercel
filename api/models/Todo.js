const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required'],
    }
})

module.exports = mongoose.model('Todo', TodoSchema);