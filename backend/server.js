const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Allowed origins
const allowedOrigins = [
  "https://mern-personal-portfolio-frontend.onrender.com", // Production
  "http://localhost:5173", // Local Vite
  "http://localhost:3000", // CRA
];

// CORS FIX (also allows Thunder Client / Postman)
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow Thunder/Postman
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

// Routes
const contactRoute = require("./routes/contactRoutes");
app.use("/api/contact", contactRoute);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
