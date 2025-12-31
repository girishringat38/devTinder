const express = require("express");

const app = express();

app.use("/home", (req, res) => {
  res.send("Hello home");
});

app.use("/about", (req, res) => {
  res.send("Hello about");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
