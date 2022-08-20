const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../../middleware/generateToken');
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

//login the user
const loginUserCtrl = expressAsyncHandler(async(req, res) => {
       const {email,password} = req?.body;
       //find the user in the database
       const userFound = await User.findOne({email});

       //check if the password is correct
       if(userFound && (await userFound?.isPasswordMatch(password))){
              res.json({
                     _id: userFound?._id,
                     firstname: userFound?.firstname,
                     lastname: userFound?.lastname,
                     email: userFound?.email,
                     isAdmin: userFound?.isAdmin,
                     token: generateToken(userFound?._id)
              });
       }

       res.status(401);
       throw new Error('Invalid Login Credentials');
})

module.exports = {registerUser,fetchUserCtrl,loginUserCtrl};