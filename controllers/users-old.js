const users = require('../seeds/users');

const ITEMS_PER_PAGE = 5;

const findUserById = (id) => {
  return users.find((v) => v.id === +id);
};

const findUserByGender = (gender) => {
  return users.filter((v) => v.gender === gender);
};

const findUsersByDepartment = (department) => {
  return users.filter((v) => v.department.split(' ').join('') === department);
};

const paginate = (data, page) =>
  data.splice((page - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE);

module.exports = {
  findUserById,
  findUserByGender,
  findUsersByDepartment,
  paginate,
  ITEMS_PER_PAGE,
};
