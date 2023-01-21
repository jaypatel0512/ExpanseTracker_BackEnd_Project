const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/users/userRoutes");
const incomeRoutes = require("./routes/income/incomeRoutes");
const expanseRoutes = require("./routes/expanses/expanseRoutes");

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

app.use(cors());

//users routes
app.use("/api/users", userRoutes);

//income routes
app.use("/api/income", incomeRoutes);

//expnase routes
app.use("/api/expanse", expanseRoutes);

//errorHandler
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the ExpanseTracker" });
});

module.exports = app;
