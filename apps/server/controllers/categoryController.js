const Category = require('../models/categoryModel');
const categorySeed = require('../seedData/categorySeed')

const seedCategory = async (req, res) => {
    await Category.deleteMany({});
    const result = await Category.insertMany(categorySeed);
    try {
        if (result) return res.status(201).json(result)        
        else return res.status(400).json({ message: "Seed category error"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    } 
}

const getAllCategory = async (req, res) => {
    const result = await Category.find({});
    console.log(result[0]._id)
    try {
        if (result) return res.status(200).json({categories: result})
        else return res.status(400).json({ message: "Error: Get all category error"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    } 
}

module.exports = { seedCategory, getAllCategory }