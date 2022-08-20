const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const expanseSchema = mongoose.Schema(
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
      default: "expanse",
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
expanseSchema.plugin(mongoosePaginate);

const Expanse = mongoose.model("Expanse", expanseSchema);

module.exports = Expanse;
