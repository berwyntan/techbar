const express = require('express')
const mongoose = require('mongoose');
const PORT = 3000;

const app = express();

const MONGO_URL = "mongodb+srv://techbar:123@cluster0.szwbbwq.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL);
mongoose.set("debug", true);

mongoose.connection.on("connected", () => {
    console.log("Connected to mongoDB");

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      });
});