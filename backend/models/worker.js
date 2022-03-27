const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workerSchema = new Schema({
  Emp_name: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Text_block: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Hour_W: {
    type: Number,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  Project_Loc: {
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
  }
});

module.exports = mongoose.model("Worker", workerSchema);
