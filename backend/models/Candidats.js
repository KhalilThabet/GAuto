const mongoose= require('mongoose');
const Schema = mongoose.Schema;



const CandidatSchema = new Schema ({
    cin:{
        type:String,
        required : false
    },
    nom:{
        type: String,
        required : false
    },
    prenom:{
        type : String,
        required : false
    },
    adresse:{
        type:String,
        required : false
    },
    mail:{
        type: String,
        required : false
    },
    num:{
        type: String,
        required : false
    },
    mdp:{
        type: String,
        required : false
    },
    nbCode:{
        type: Number,
        required : false
    },
    nbConduite:{
        type: Number,
        required : false
    },
    nbExamCode:{
        type: Number,
        required : false
    },
    nbExamConduite:{
        type: Number,
        required : false
    },
    MontantPayer:{
        type: Number,
        required : false
    },
    MontantResteAPayer:{
        type : Number,
        required : false
    },
    dateSession:{
        type: String,
        required : false
    },
    heureSession:{
        type: String,
        required : false
    },
    typeSession:{
        type: String,
        required : false
    },
    dateExam:{
        type: String,
        required : false
    },
    heureExam:{
        type: String,
        required : false
    },
    typeExam:{
        type: String,
        required : false
    }
});
 
module.exports = Candidats = mongoose.model('candidat', CandidatSchema);