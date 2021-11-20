var express = require('express');
const { handleCreateUser, getUsers } = require('../controllers/users');
var router = express.Router();

router.get('/', getUsers);

router.post('/', handleCreateUser);

module.exports = router;
