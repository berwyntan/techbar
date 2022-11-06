require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const morgan = require("morgan");
const session = require("express-session");
const sessionOptions = require("./config/sessionOptions");

// routers
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");

const PORT = process.env.PORT || 3000;
const app = express();

// mongo
mongoose.connect(process.env.MONGO_URL);
mongoose.set("debug", true);

// middleware
app.set('trust proxy', 1); // trust first proxy
app.use(express.static("../client/dist"));

app.use(cors(corsOptions));

app.use(
  session(sessionOptions)
);

app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB");
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
