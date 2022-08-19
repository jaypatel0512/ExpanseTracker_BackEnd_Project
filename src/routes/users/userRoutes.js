const express = require('express');
const { registerUser, fetchUserCtrl } = require('../../contorllers/users/usersCtrl');

const userRoutes = express.Router();

userRoutes.post('/register', registerUser)
userRoutes.get('/',fetchUserCtrl)

module.exports = userRoutes;