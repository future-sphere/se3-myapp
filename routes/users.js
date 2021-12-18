var express = require('express');
const {
  handleCreateUser,
  getUsers,
  removeUser,
  updateUser,
  getUsersByName,
  getUsersByAge,
  getUsersByAgeRange,
} = require('../controllers/users');
var router = express.Router();

router.get('/', getUsers);

router.get('/name', getUsersByName);

router.get('/age', getUsersByAge);

router.get('/age/range', getUsersByAgeRange);

router.post('/', handleCreateUser);

router.delete('/', removeUser);

router.put('/', updateUser);

module.exports = router;
