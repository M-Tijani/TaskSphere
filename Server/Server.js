const express = require("express");
const app = express();
const cors = require("cors");
// Router
const router = require("./routes/route-users");
// ENV CONFIG
require("dotenv").config();
// PORT
const PORT = process.env.PORT || 3001;

const session = require("express-session");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// DATABASE
const mongoose = require("mongoose");

// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: (origin, callback) => {
      const origins = String(process.env.CORS_ORIGIN).split(",");
      if (!origin || origins.includes(String(origin))) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed."), false);
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
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
