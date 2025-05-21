const express = require("express");
const { registerUser, loginUser, getUserProfile } = require("../controllers/authController.controller");
const { protect } = require("../middlewares/authMiddleware.middleware");

const router = express.Router();

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile", protect, getUserProfile);

module.exports = router;