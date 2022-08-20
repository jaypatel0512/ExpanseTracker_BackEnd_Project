const express = require ("express");
const dotenv = require ("dotenv");
const dbConnect = require("./config/dbConnect");
const {errorHandler, notFound} = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/users/userRoutes");


const app = express();
//env
dotenv.config();

const logger = (req, res, next) => {
    console.log("Am a logger");
    next();
};

app.use(logger); 
//Dbconnect
dbConnect();

//middleware
app.use(express.json());

//routes
app.use("/api/users",userRoutes);

//errorHandler
app.use(notFound);
app.use(errorHandler);

app.get('/',(req,res) => {
    res.json({msg:'Welcome to the ExpanseTracker'});
})

module.exports = app;