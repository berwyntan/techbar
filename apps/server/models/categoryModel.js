const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  coategory: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Category = new mongoose.model("Category", categoryShema);

module.exports = Category;
