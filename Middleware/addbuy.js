const mongoose = require("mongoose");
const User = require("../Model/UserSchema");
const BuyProperty = require("../Model/BuyProperty");

const AddBuy = async (req, res, next) => {
  try {
    //Get user information form frontend
    const { uid, propertyId } = req.body;

    //Find data from database
    const userDetails = await User.find({
      uid: uid,
    });

    //Create buy property data for insert database
    let userId = userDetails[0]._id;
    // let buyProperty = {
    //   propertyId: propertyId,
    //   userId: userId,
    // };

    //Push data to database
    // let buy = await new BuyProperty(buyProperty);
    // let addedBuyProperty = await buy.save();

    //Push buy property data to database
    const data = await User.updateOne(
      { _id: userId },
      {
        $push: {
          buyProperty: propertyId,
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
module.exports = AddBuy;
