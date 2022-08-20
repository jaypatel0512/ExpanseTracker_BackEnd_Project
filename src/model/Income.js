const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const incomeSchema = mongoose.Schema(
  {
    title: {
      required: [true, "Title is required"],
      type: String,
    },
    description: {
      required: [true, "description is required"],
      type: String,
    },
    type: {
      type: String,
      default: "income",
    },
    amount: {
      required: [true, "Amount name is required"],
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId, // must be mongo db id
      ref: "User",
      required: [true, "user is required"],
    },
  },
  {
    timestamps: true,
    toJSON:{
      virtuals: true,
    },
    toObject:{
      virtuals: true, 
    }
  }
);

//pagination
incomeSchema.plugin(mongoosePaginate);

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
