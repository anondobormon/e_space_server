const User = require("../Model/UserSchema");

const DeleteProperty = async (req, res, next) => {
  console.log(req.body);
  try {
    const data = await User.find({
      _id: req.body.userId,
      buyProperty: [req.body.propertyId],
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = DeleteProperty;
