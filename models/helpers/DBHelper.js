const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectDB = async() => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        })
        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;