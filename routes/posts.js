var express = require('express');
const { getPosts } = require('../controllers/posts');
var router = express.Router();

router.get('/', getPosts);

module.exports = router;
