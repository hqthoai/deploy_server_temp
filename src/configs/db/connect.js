const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://thoaifamily83:0CFFqJbZtjQFYdzD@learning-chinese.uqrsnxp.mongodb.net/learning-chinese?retryWrites=true&w=majority', {useNewUrlParser: true,});
        console.log("mongoDB connected successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connectDB };