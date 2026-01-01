const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

//Handle Auth middleware for the all GET, POST,....requests
app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
  res.send("User login successfully");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete a user");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
