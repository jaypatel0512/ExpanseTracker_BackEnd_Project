const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//schema
const userSchema = mongoose.Schema(
  {
    firstname: {
      required: [true, "First name is required"],
      type: String,
    },
    lastname: {
      required: [true, "Last name is required"],
      type: String,
    },
    email: {
      required: [true, "Email name is required"],
      type: String,
    },
    password: {
      required: [true, "Password name is required"],
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamp: true,
  }
);

//verify password
userSchema.methods.isPasswordMatch = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

//Hash password
userSchema.pre('save', async function(next){
  if (!this.isModified("password")){
    next();
  } 
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

//compile schema into model

const User = mongoose.model('User', userSchema);

module.exports = User;