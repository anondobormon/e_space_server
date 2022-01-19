const BuyProperty = require("../Model/BuyProperty");

const getProperty = async (req, res, next) => {
  try {
    let allUsers = await BuyProperty.find().populate("propertyId");
    res.send(allUsers);
  } catch (error) {
    res.status(200).json({ message: "Authentication error" });
  }
};

module.exports = getProperty;
