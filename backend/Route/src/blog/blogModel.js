var mongoose = require('mongoose');
var schema = mangoose.schema;

var userschema = new schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type : String ,

    },
    email:{
        type:String,

    },
password:{
        type:String,
        required:true
    }

});
module.exports = mongoose.model('User',userschema);