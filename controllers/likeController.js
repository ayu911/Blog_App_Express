    //Import Models
    const Post=require("../models/postModels");
    const Like=require("../models/likeModel");

    //Like a Post

    exports.likePost=async (req,res)=>{
        //fetch the data from it body

    const{post,user}=req.body;
    const like=new Like({
        post,user,
    });

    const savedLike=await like.save();

    //Update the post collection basis on this 

    try{
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true});

        res.json({
            post:updatedPost,
        });
    }

    catch(error){
        return res.status(400).json({
            error:"Error while Liking Post",
        });
        }
    }

//Unlike a Post
exports.unLikePost=async (req,res)=>{
    //fetch the data from it body
    try{
        const{post,user}=req.body;

        //Find and Delete the Like from like Collection 
        const deleteLike=await Like.findOneAndDelete({post:post,_id:like});
        
        //Update the post Collection by deleting the current like Id
        
        const UpdatedPost=await Post.findByIdAndDelete(post,
            {$pull:{likes:deletedLike._id}},
            {new:true});
        
            res.json({
                post:updatedPost,
            });
    }

    catch(error){
        return res.status(400).json({
            error:"Error while Liking Post",
        });
        }

}



