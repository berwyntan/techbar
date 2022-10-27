const User = require('../models/userModel');
const userSeed = require('../seedData/userSeed')

const seedUser = async (req, res) => {
    
    await User.deleteMany({});
    const result = await User.insertMany(userSeed);
    
    try {
        if (result) return res.status(201).json(result)
        else return res.status(400).json({ message: "Seed user error"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { seedUser }