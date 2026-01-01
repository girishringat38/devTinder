const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

//Handle Auth middleware for the all GET, POST,....requests
app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
  try {
    throw new Error("fgfsgfg");
    res.send("User login successfully");
  } catch (err) {
    res.status(500).send("Something went wrong2");
  }
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

//Error handling
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
