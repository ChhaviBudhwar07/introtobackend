import {Post} from "../models/post.model.js";

const createPost=async(req,res)=>{
    try{
        const{name,description,age}=req.body;

        if(!name || !description || !age)
            return res.status(400).json({message:"All fields are required"});

        const post=await Post.create({name,description,age});

        res.status(201).json({message:"Post created successfully", post});

    }
    catch(error){
        return res.status(500).json({message:"Error creating post", error});
    }
}

//read all posts
const getPosts=async(req,res)=>{
    try{
        const posts=await Post.find();
        res.status(200).json({message:"Posts fetched successfully", posts});
    }
    catch(error){
        return res.status(500).json({message:"Error fetching posts", error});
    }
}

const updatePost=async(req,res)=>{
    try{
        if(Object.keys(req.body).length===0){
            return res.status(400).json({message:"At least one field is required to update"});
        }

        const post=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
    
        if(!post) return res.status(404).json({message:"Post not found"});
        res.status(200).json({message:"Post updated successfully", post});
    }
    catch(error){
        return res.status(500).json({message:"Error updating post", error});
    }
}

const deletePost=async(req,res)=>{
    try{
        const deleted =await Post.findByIdAndDelete(req.params.id);

        if(!deleted) return res.status(404).json({message:"Post not found"});

        res.status(200).json({message:"Post deleted successfully", deleted});
    }
    catch(error){
        return res.status(500).json({message:"Error deleting post", error});
    }
}       

export {
    createPost,
    getPosts,
    updatePost,
    deletePost
};