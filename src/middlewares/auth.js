const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    //Read the token from the req cookies
    const { token } = req.cookies; //https://expressjs.com/en/api.html#res.cookie  If you want to read the cookie then need middleware like cookie-parser (npm i cookie-parser)
    if (!token) {
      throw new Error("Token is not valid !!!!");
    }

    //...............................pass token.....secreteKey
    const decodedObj = await jwt.verify(token, "DEV@TINDER$790");
    const { _id } = decodedObj;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    // Attach into the request
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
};
module.exports = { userAuth };
