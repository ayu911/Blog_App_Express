const mongoose=require("mongoose");

//Route Handler

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
body:{
    type:String,
    required:true,
},

//For Likes we will assign array if Id's here
likes:[{
type:mongoose.Schema.Types.ObjectId,
ref:"Like"

}],

//For Comments we will assign array if Id's here
comments:[{
type:mongoose.Schema.Types.ObjectId,
ref:"Comment"

}],


});




