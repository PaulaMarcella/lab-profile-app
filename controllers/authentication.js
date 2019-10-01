"use strict";

const User = require("./../models/user");

exports.signUp = (req, res, next) => {
  const { username, password, campus, course } = req.body;
  User.signUp({ username, password, campus, course })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.json({ type: "success", data: { user } });
    })
    .catch(error => {
      next(error);
    });
};

exports.signIn = (req, res, next) => {
  const { username, password } = req.body;
  User.signIn({ username, password })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.json({ type: "success", data: { user } });
    })
    .catch(error => {
      next(error);
    });
};

exports.loggedIn = (req, res, next) => {
  res.json({
    type: "success",
    data: {
      ...(req.user && { user: req.user })
    }
  });
};

// module.export.edit = (req, res, next) => {
//   const { username, campus, course } = req.body;

//   User.findByIdAndUpdate(
//     req.user._id,
//     {
//       username,
//       campus,
//       course
//     },
//     { new: true }
//   )
//     .then(user => {
//       if (!user) {
//         next(new Error("User_not_found"));
//         return;
//       }
//       res.json({ user });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
