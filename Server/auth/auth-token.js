// require("dotenv").config();

// // const session = require("express-session");

// const session = (req, res, next) => {
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   });
//   next();
//   res.status(200).json({ message: "Session created successfully" });
// };

// module.exports = session;
