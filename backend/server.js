require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db.config");
const authRoutes = require("./routes/authRoutes.routes");
const sessionRoutes = require("./routes/sessionRoutes.routes");

const app = express();

// Middleware to handle CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
// app.use("/api/questions", questionRoutes);

// AI Generated Routes
// app.use("/api/ai/generate/questions", protect, generatedInterviewQuestions);
// app.use("/api/ai/generate/explanations", protect, generatedConceptExplanations);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
