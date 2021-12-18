const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: Date,
  author: String,
  likes: Number,
});

const PostModel = mongoose.model('posts', PostSchema);

module.exports = PostModel;
