const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Server is running: ${port}`);
});

// asjhdkjahdjkh
// asjhdkjahdjkh
module.exports = { app };
// kjdd
// kjdd
// kjdd
// kjdd
// kjdd
// kjdd
// kjdd

//my new push
//my new push
//my new push
//my new push
//my new push
//my new push
//my new push
