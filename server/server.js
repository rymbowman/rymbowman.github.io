require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/message", (req, res) => {
  console.log(req.body);
  res.send("Welcome");
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
