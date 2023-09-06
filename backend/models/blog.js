const mongoose = require('mongoose') ; 
const schema = mongoose.schema;

let blog  = new schema
({
    name :{ type :String},
    email :{ type : String},
    PhoneNumber : { type:Number},
    gender : { options: String},
    password : { }
},
{collection:"blog"}
)
module.exports=mongoose.model('blog',blog)