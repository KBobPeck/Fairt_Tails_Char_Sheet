//imports from node_modules
const express = require("express");
const app = express();
require("dotenv").config();

//imports from files
const connectDB = require("./db/db");
connectDB();

//variables
const PORT = process.env.PORT || 3001;

//routing
app.use("/", (req, res) => res.send("API Running"));

//app startup
app.listen(PORT, () => {
  console.log(`Server Listening @ ${PORT}`);
});
