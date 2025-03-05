//Import Model

const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

//Business Logic 

exports.createComment=async(req,res)=>{
    try{
//Fetch Data from Req Body
const{post,user,body}=req.body;

//Create a comment Object 
const comment=new Comment({
    post,user,body  
});

//Save the New Comment into the database
const savedComment=await comment.save();

//Find the comment in the Post id ,and add the new comment by the user in the Post comments array

const updatePost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComments._id}},{new:true})
                .populate("comments")//-->>Populate the comments array with comment document
                    .exec();
res.json({
    post:updatedPost,
});
    }
    catch(err){
return res.status(500).json({
    error:"Error While Creating Comment"
})



    }
}







