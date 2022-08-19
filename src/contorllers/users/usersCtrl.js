const expressAsyncHandler = require('express-async-Handler');
const User = require("../../model/User");


//Register
const registerUser = expressAsyncHandler(async(req, res) => {

       const {email, firstname, lastname, password} = req?.body;
       
        //check if the user is already registered
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) throw new Error("Already registered");
       try {
              const user = await User.create({ email, firstname, lastname, password });
              res.status(200).json(user);
       
       } catch (error) {
              res.json(error);
       }
       });

//fetch all the users
const fetchUserCtrl = expressAsyncHandler(async(req, res) => {
       try {
             const users = await User.find({}); 
             res.json(users);
       } catch (error) {
              res.json(error);
       }
});

module.exports = {registerUser,fetchUserCtrl};