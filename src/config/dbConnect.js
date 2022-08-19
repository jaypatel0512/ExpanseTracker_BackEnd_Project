const mongoose = require('mongoose');

const dbConnect = async() => {
    try {
        await mongoose.connect('mongodb+srv://n01421387:PjdIFKjwOGATc6Kk@cluster0.cfddo.mongodb.net/ExpanseTracker?retryWrites=true&w=majority',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`DB Connection established`);
    } catch (error) {
        console.log(`Error connecting ${error.message}`);
        
    }
}

module.exports = dbConnect;