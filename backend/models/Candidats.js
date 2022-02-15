const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidatSchema = new Schema({
  CIN: {
    type: String,
    required: false,
  },
  LastName: {
    type: String,
    required: false,
  },
  FirstName: {
    type: String,
    required: false,
  },
  Adress: {
    type: String,
    required: false,
  },
  AdressMail: {
    type: String,
    required: false,
  },
  PhoneNumber: {
    type: String,
    required: false,
  },
  Password: {
    type: String,
    required: false,
  },
  NumberOfCodeSessions: {
    type: Number,
    required: false,
  },
  NumberOfDrivingSessions: {
    type: Number,
    required: false,
  },
  NumberOfCodeExams: {
    type: Number,
    required: false,
  },
  NumberOfDrivingExams: {
    type: Number,
    required: false,
  },
  AmountPaid: {
    type: Number,
    required: false,
  },
  AmountRemaining: {
    type: Number,
    required: false,
  },
  DateSession: {
    type: String,
    required: false,
  },
  TimeSession: {
    type: String,
    required: false,
  },
  TypeSession: {
    type: String,
    required: false,
  },
  DateExam: {
    type: String,
    required: false,
  },
  TimeExam: {
    type: String,
    required: false,
  },
  TypeExam: {
    type: String,
    required: false,
  },
});

module.exports = Candidats = mongoose.model("candidat", CandidatSchema);
