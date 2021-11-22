const User = require("../Model/UserSchema");

const GetUserInfo = async (req, res, next) => {
  try {
    let allUsers = await User.find().populate("buyProperty");
    res.send(allUsers);
  } catch (error) {
    res.status(200).json({ message: "Authentication error" });
  }
};

module.exports = GetUserInfo;
