const mongoose = require("mongoose");
const validator = require("validator");
//https://www.npmjs.com/package/validator     (npm i validator)

//https://mongoosejs.com/docs/schematypes.html   for mongoose document   (npm i mongoose)
//Defining schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 20,
    },
    lastName: {
      type: String,
      minLength: 4,
      maxLength: 20,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minLength: 5,
      maxLength: 50,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email address" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
      maxLength: 20,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter a strong password" + value);
        }
      },
    },
    age: {
      type: Number,
      min: 18,
      max: 50,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photoUrl: {
      type: String,
      default: "https://statinfer.com/wp-content/uploads/dummy-user.png",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid Photo URL" + value);
        }
      },
    },
    about: {
      type: String,
      minLength: 4,
      maxLength: 50,
      default: "This is a default about of the user !",
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

//Define model
const User = mongoose.model("User", userSchema);

module.exports = User;
