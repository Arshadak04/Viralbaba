
const Post=require('./../model/postModel');



 exports.postCreate= async(req, res ,next)=>{
const newContent = await Post.create(req.body.ckeditor);
console.log(newContent)
	
 res.send('Successfully inserted!');
	
};


