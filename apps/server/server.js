require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const morgan = require("morgan");
const session = require("express-session");

// routers
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const userRouter = require("./routes/userRouter");

const PORT = process.env.PORT || 3000;
const app = express();

// mongo
mongoose.connect(process.env.MONGO_URL);
mongoose.set("debug", true);

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/user", userRouter);

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB");
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
