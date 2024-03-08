const express = require("express");
const app = express();

// Router
const router = require("./routes/route-users");
// ENV CONFIG
require("dotenv").config();
// PORT
const PORT = process.env.PORT || 3001;

// DATABASE
const mongoose = require("mongoose");

app.use("/api", router);

try {
  if (mongoose.connect(process.env.DATABASE_URL)) {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
} catch (err) {
  console.log(err);
}
