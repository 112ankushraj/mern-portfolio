const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ========================
//        CORS FIX
// ========================
const allowedOrigins = [
  "https://mern-personal-portfolio-frontend.onrender.com", // your live frontend
  "http://localhost:5173", // local development (change if needed)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g. Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS not allowed"), false);
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ========================
//        ROUTES
// ========================
const contactRoute = require("./routes/contactRoutes");
app.use("/api/contact", contactRoute);

// ========================
//       START SERVER
// ========================
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
