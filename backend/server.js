const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Allowed origins (production + local development)
const allowedOrigins = [
  "https://mern-personal-portfolio-frontend.onrender.com", // Production
  "http://localhost:5173", // Local Vite
  "http://localhost:3000", // CRA (optional)
];

// CORS FIX
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
const contactRoute = require("./routes/contactRoutes");
app.use("/api/contact", contactRoute);

// Home route FIXED
app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
