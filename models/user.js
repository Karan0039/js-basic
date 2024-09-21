const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    name: { type: String }, //optional
  },
  { timestamps: true } // createdAt, updatedAt
);

const Users = mongoose.model("User", userSchema);

module.exports = { Users };
