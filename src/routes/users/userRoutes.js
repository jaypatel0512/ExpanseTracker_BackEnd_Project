const express = require('express');
const { registerUser, fetchUserCtrl,loginUserCtrl } = require('../../contorllers/users/usersCtrl');

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUserCtrl)
userRoutes.get('/',fetchUserCtrl)

module.exports = userRoutes;