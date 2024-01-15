const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`, {useNewUrlParser: true,});
        console.log("mongoDB connected successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connectDB };