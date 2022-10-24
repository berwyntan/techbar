const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
  },
  images: [
    {      
      type: String,
      required: [true, "Please Provide Image URL"],      
    },
  ],

  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    // required: true,
  },
});

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
