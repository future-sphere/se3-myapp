const PostModel = require('../schema/posts');

const getPosts = async (req, res) => {
  const posts = await PostModel.find();

  return res.json(posts);
};

const createPost = async (req, res) => {
  const { title, content, author, likes } = req.body;

  const now = new Date();

  const newPost = await PostModel.create({
    title,
    content,
    author,
    likes,
    createdAt: now,
  });

  return res.json(newPost);
};

module.exports = {
  getPosts,
};
