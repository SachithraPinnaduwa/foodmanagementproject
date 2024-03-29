const express = require("express");
const cors = require("cors");
const app = express();
const login = require("./routes/login");

require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/login", login);

app.get("/", (req, res) => {
  res.send({ message: "main page of server" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
