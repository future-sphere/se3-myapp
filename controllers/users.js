const UserModel = require('../schema/users');

const getUsers = async (req, res) => {
  const users = await UserModel.find();

  return res.json(users);
};

const getUsersByName = async (req, res) => {
  const regexp = new RegExp(req.query.name, 'i');
  const users = await UserModel.find({
    name: regexp,
  });

  return res.json(users);
};

const getUsersByAge = async (req, res) => {
  const users = await UserModel.find({
    age: req.query.age,
  });

  return res.json(users);
};

const getUsersByAgeRange = async (req, res) => {
  const { minAge, maxAge } = req.query;
  const users = await UserModel.find({
    age: {
      $gte: minAge,
      $lte: maxAge,
    },
  });

  return res.json(users);
};

const handleCreateUser = async (req, res) => {
  const { name, age } = req.body;

  const newUser = await UserModel.create({
    name,
    age,
  });

  return res.json(newUser);
};

const removeUser = async (req, res) => {
  const { id } = req.body;

  await UserModel.findByIdAndDelete(id);

  return res.json('User has been deleted');
};

const updateUser = async (req, res) => {
  const { id, name, age } = req.body;

  const user = await UserModel.findByIdAndUpdate(
    id,
    {
      $set: {
        name: name,
        age: age,
      },
    },
    {
      new: true,
    },
  );

  return res.json(user);
};

module.exports = {
  handleCreateUser,
  getUsersByAgeRange,
  getUsers,
  removeUser,
  updateUser,
  getUsersByName,
  getUsersByAge,
};
