const mongoose = require('mongoose');

const dbConnect = async() => {
    try {
        await mongoose.connect(
        process.env.MONGO_URL,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`DB Connection established`);
    } catch (error) {
        console.log(`Error connecting ${error.message}`);
        
    }
}

module.exports = dbConnect;