const UserModel = require('../schema/users');

const handleCreateUser = async (req, res) => {
  const { name, age } = req.body;

  const newUser = await UserModel.create({
    name,
    age,
  });

  return res.json(newUser);
};

const getUsers = async (req, res) => {
  const users = await UserModel.find();

  return res.json(users);
};

module.exports = {
  handleCreateUser,
  getUsers,
};
