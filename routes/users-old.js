var express = require('express');
var router = express.Router();
const {
  findUserById,
  findUserByGender,
  findUsersByDepartment,
  paginate,
  ITEMS_PER_PAGE,
} = require('../controllers/users');

// 1. Find user by id (should return 1 user only)
// 2. Find female users (should return all male users)
// 3. Find all users in Human Resources department (should return all human resource department users)

// a. filter b. map c. find d. reduce

/* GET users listing. */
router.get('/user/:id', function (req, res, next) {
  const { id } = req.params;
  const result = findUserById(+id);
  res.json(result);
});

// Build a query version of looking up id of a user, and return that user info
// localhost:4000/users?id=99
// localhost:4000/users?id=124

router.get('/user', function (req, res) {
  const { id } = req.query;
  const result = findUserById(+id);
  res.json(result);
});

router.get('/gender', function (req, res) {
  const { gender } = req.query;
  const { page } = req.query;
  const data = findUserByGender(gender);
  const numberOfUsers = data.length;
  const result = {
    data: paginate(data, page),
    pages: Math.ceil(numberOfUsers / ITEMS_PER_PAGE),
    currentPage: +page,
    count: numberOfUsers,
  }; 
  res.json(result);
});

// Build a params version of looking up users of a gender, and return the users
// localhost:4000/users/gender/Male
// localhost:4000/users/gender/Female

router.get('/gender/:gender', function (req, res) {
  const { gender } = req.params;
  const { page } = req.query;
  const data = findUserByGender(gender);
  const numberOfUsers = data.length;
  const result = {
    data: paginate(data, page),
    pages: Math.ceil(numberOfUsers / ITEMS_PER_PAGE),
    currentPage: +page,
    count: numberOfUsers,
  };
  res.json(result);
});

router.get('/department/:department', function (req, res) {
  const { department } = req.params;
  const result = findUsersByDepartment(department);
  res.json(result);
});

router.get('/department', function (req, res) {
  const { department } = req.query;
  const result = findUsersByDepartment(department);
  res.json(result);
});

module.exports = router;
