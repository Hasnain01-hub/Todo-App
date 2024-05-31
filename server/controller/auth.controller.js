const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../model/user.model");

exports.fetchUserData = async (req, res) => {
  if (req.user) {
    console.log(req.user);
    res.status(200).json({
      message: "User is logged in successfully!",
      success: true,
      user: req.user,
    });
  } else {
    res.status(401).json({
      message: "Invalid user id!",
      success: false,
    });
  }
};
