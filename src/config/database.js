const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://girishringat38:27QQxjh9trBdEU9t@namastenode.hkb0lpj.mongodb.net/devTinder?appName=NamasteNode"
  );
};
module.exports = connectDB;
