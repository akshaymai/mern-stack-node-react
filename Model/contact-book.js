const mongoose=require('mongoose')
const Schema=mongoose.Schema
const validator=require('validator')

const contcatBookSchema=new Schema({

name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true
    // validate: {
    //     validator: function(v) {
    //         return /\d{2}-\d{3}-\d{4}/.test(v);
    //     },
    //     message: '{VALUE} is not a valid 10 digit number!'
    // }

},
address:{
    type:String,
    required:true
}
},{timestamps:true,versionKey:false})



const Contact=mongoose.model("Contact",contcatBookSchema,'Contact')
module.exports={Contact}