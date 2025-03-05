const mongoose=require("mongoose");



//PostModel will refer to the id of commentModel which we have to export it from here through reference
//LikeModel will have user(string) and Post
    

//Route Handler

const likeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",//reference to Post model
    },

user:{
type:String,
required:true,
}
});


//exports

module.exports=mongoose.model("Like",likeSchema);


