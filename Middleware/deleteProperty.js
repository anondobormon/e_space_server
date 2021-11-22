const User = require("../Model/UserSchema");

const DeleteProperty = async (req, res, next) => {
  try {
    const data = await User.find({ _id: req.body._id });
    console.log(data);
  } catch (error) {}
};

module.exports = DeleteProperty;
