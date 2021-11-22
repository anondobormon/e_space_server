const User = require("../Model/UserSchema");
const BuyProperty = require("../Model/BuyProperty");

const GetUserInfo = async (req, res, next) => {
  try {
    let allUsers = await User.find().populate("buyProperty");
    console.log(allUsers);
    res.send(allUsers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = GetUserInfo;
