const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  LastName: {
    type: String,
    required: false,
  },
  FirstName: {
    type: String,
    required: false,
  },
  CIN: {
    type: String,
    required: false,
  },
  Salary: {
    type: String,
    required: false,
  },
  Position: {
    type: String,
    required: false,
  },
  Service: {
    type: String,
    required: false,
  },
  PhoneNumber: {
    type: String,
    required: false,
  },
});

module.exports = Employees = mongoose.model("employee", EmployeeSchema);
