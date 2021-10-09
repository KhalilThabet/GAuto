const mongoose= require('mongoose');
const Schema = mongoose.Schema;


 
const EmployeeSchema = new Schema ({
    nom:{
        type:String,
        required : false
    },
    prenom : {
        type:String,
        required : false
    },
    cin : {
        type:String,
        required : false
    },
    salaire : {
        type:String,
        required : false
    },
    poste : {
        type:String,
        required : false
    },
    service : {
        type:String,
        required : false
    },
    telephone : {
        type:String,
        required: false
    }
});

module.exports = Employees = mongoose.model('employee', EmployeeSchema);