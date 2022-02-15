const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehiculeSchema = new Schema({
  Brand: {
    type: String,
    required: false,
  },
  RegisterPlate: {
    type: String,
    required: false,
  },
  Sticker: {
    type: String,
    required: false,
  },
  Insurance: {
    type: String,
    required: false,
  },
  TechnicalInspection: {
    type: String,
    required: false,
  },
  Drainage: {
    type: String,
    required: false,
  },
  Filters: {
    type: String,
    required: false,
  },
  Breaks: {
    type: String,
    required: false,
  },
  Wheel: {
    type: String,
    required: false,
  },
  Belt: {
    type: String,
    required: false,
  },
  Model: {
    type: String,
    required: false,
  },
  NumberOfHorses: {
    type: String,
    required: false,
  },
  Service: {
    type: Boolean,
    required: false,
  },
});

module.exports = Vehicules = mongoose.model("vehicule", VehiculeSchema);
