const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  CIN: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Position: {
    type: String,
    required: true,
  },
});

module.exports = Item = mongoose.model("item", AuthSchema);
