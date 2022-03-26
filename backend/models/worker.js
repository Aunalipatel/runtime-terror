const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  aadhar: {
    type: Number,
    required: true,
  },
  insurance: {
    insuranceId: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  adminId: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
});

module.exports = mongoose.model("Worker", workerSchema);
