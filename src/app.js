const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Girish", lastName: "Ringat" });
});

app.post("/user", (req, res) => {
  res.send("Data Saved Successfully");
});

app.patch("/user", (req, res) => {
  res.send(res.send("Data update Successfully"));
});

app.delete("/user", (req, res) => {
  res.send("Daya delete successfully");
});

app.put("/user", (req, res) => {
  res.send("Data update save successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
