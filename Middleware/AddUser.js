const User = require("../Model/UserSchema");

const AddUser = async (req, res, next) => {
  try {
    const userData = req.body;
    console.log(userData);
    const newUser = User(userData);
    const addedUser = await newUser.save();
    console.log(addedUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = AddUser;
