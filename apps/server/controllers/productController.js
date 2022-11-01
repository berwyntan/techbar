const Product = require('../models/productModel');
const productSeed = require('../seedData/productSeed')

const seedProduct = async (req, res) => {
    await Product.deleteMany({});
    const result = await Product.insertMany(productSeed);
    try {
        if (result) return res.status(201).json(result)
        else return res.status(400).json({ message: "Seed product error"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

const getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    const result = await Product.find({ category: category }).populate('category').exec();
    
    try {
        if (result) return res.status(200).json(result)
        else return res.status(400).json({ message: "Category not found"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    const result = await Product.findOne({ _id: id }).populate('category').exec();
    
    try {
        if (result) return res.status(200).json(result)
        else return res.status(400).json({ message: "Category not found"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}
const getAllProducts = async (req, res) => {
    
    const result = await Product.find({}).populate('category').exec();
    
    try {
        if (result) return res.status(200).json({products: result})
        else return res.status(400).json({ message: "Products not found"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { seedProduct, getProductsByCategory, getProductById, getAllProducts }