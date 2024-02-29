const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const inventoryRouter = require("./routes/inventory");
const vendorRouter = require("./routes/vendor");
const userRouter = require("./routes/user");

dotenv.config();

const url = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle connection events
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("MongoDB connected successfully");
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    optionsSuccessStatus: 200,
  })
);
app.use("/inventory", inventoryRouter);
app.use("/vendor", vendorRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "I did it!",
  });
});
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
