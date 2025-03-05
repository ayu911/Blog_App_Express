const mongoose=require("mongoose");



//PostModel will refer to the id of commentModel which we have to export it from here through reference
//CommentModel will have user(string) and comment section(body)


//Route Handler

const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",//reference to Post model
    },

user:{
type:String,
required:true,
},

body:{
    type:String,
    required:true,
}
});


//exports

module.exports=mongoose.model("Comment",commentSchema);

