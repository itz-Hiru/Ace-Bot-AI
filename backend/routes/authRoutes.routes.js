const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/authController.controller");
const { protect } = require("../middlewares/authMiddleware.middleware");
const upload = require("../middlewares/uploadMiddleware.middleware");

const router = express.Router();

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

// Image upload route
router.post("/upload/image", upload.single("image"), (req, res) => {
  // Check if image file is uploaded
  if (!req.file) {
    return res.status(400).json({ message: "No images uploaded" });
  }
  // Create image url link
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});

module.exports = router;
