const UserModel = require('../models/Usuario');

const createUser = (req, res) => {
  UserModel.createUser(req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    });
};

const getAllUsers = (req, res) => {
  UserModel.getUsers()
    .then((data) => {
      return res.status(200).send({ message: data })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    });
};

const deleteOneUser = (req, res) => {
  UserModel.deleteOneUser(req.params.id)
    .then((data) => {
      return res.status(200).send({ message: data })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    })
};

module.exports = {
  createUser,
  getAllUsers,
  deleteOneUser,
}