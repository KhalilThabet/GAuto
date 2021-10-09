const mongoose= require('mongoose');
const Schema = mongoose.Schema;

 
const VehiculeSchema = new Schema ({
    marque:{
        type : String,
        required : false
    },
    immatricule :{
        type : String,
        required : false
    },
    vignette : {
        type:String,
        required : false
    },
    assurance : {
        type : String,
        required : false
    },
    visiteTechnique : {
        type : String,
        required : false
    },
    vidange : {
        type : String,
        required : false
    },
    filtre : {
        type : String,
        required : false
    },
    freinage : {
        type : String,
        required : false
    },
    pneues : {
        type : String,
        required : false
    },
    courroies :{
        type : String,
        required : false
    },
    modele :{
        type : String,
        required : false
    },
    nbCheveau :{
        type : String,
        required : false
    },
    service :{
        type : Boolean,
        required : false
    }
});

module.exports = Vehicules = mongoose.model('vehicule', VehiculeSchema);