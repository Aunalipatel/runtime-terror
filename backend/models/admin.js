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
    type: int,
    required: true,
  },
  age: {
    type: int,
    required: true,
  },
  aadhar: {
    type: int,
    required: true,
  },
  insurance: {
    insuranceId: {
      type: int,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    date: {
      type: date,
      required: true,
    },
  },
});

module.exports = mongoose.model("Worker", workerSchema);