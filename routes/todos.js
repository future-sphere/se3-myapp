var express = require('express');
var router = express.Router();
const TodoModel = require('../schema/todos');

router.get('/', function (req, res) {
  TodoModel.find({}).then((doc) => {
    res.json(doc);
  });
});

router.post('/', function (req, res) {
  const { title, author, isComplete } = req.body;
  TodoModel.create({
    title,
    author,
    isComplete,
  }).then((doc) => {
    res.json(doc);
  });
});

module.exports = router;
