const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: String,
  author: String,
  isComplete: Boolean,
});

const TodoModel = mongoose.model('todos', TodoSchema);

module.exports = TodoModel;
