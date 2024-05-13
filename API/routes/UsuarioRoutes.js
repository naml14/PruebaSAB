const express = require('express');
const { UserController } = require('../Controllers');
const route = express.Router();

route.post('/', UserController.createUser);
route.get('/', UserController.getAllUsers);
route.delete('/:id', UserController.deleteOneUser);

module.exports = route;