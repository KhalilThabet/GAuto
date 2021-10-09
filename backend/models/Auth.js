const mongoose= require('mongoose');
const Schema = mongoose.Schema;

 

const AuthSchema = new Schema ({
    cin:{
        type:String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    poste : {
        type : String,
        required: true
    }
});

module.exports = Item = mongoose.model('item', AuthSchema);