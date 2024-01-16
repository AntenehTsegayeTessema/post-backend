const express = require('express');
//import express from 'express';
const router = express.Router();
const Post = require('../models/Posts.js');
//import Post from '../models/Post.js';
//const e = require('express');
//import express from 'express';
//const router = express.Router();
//import Post from '../models/Post.js';
//import e from 'express';

// GET BACK ALL THE POSTS
router.get('/',  async (req, res) => {
    try {
        const posts =  await Post.find();
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({ message: err });
    }
});

// SUBMITS A POST
router.post('/',async (req,res)=>{
    const post =  new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const savedPost =await post.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json({message:err});

    }

}
);
// SPECIFIC POST
router.get('/:id',async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
    if(!post) {return res.status(404).send('The post with the given ID was not found.')}

        res.status(200).json(post);
    }catch(err){
        res.status(500).json({message:err});

    }}
);  
// DELETE POST

router.delete('/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const removedPost = await Post.deleteOne({_id:id});

        //removedPost.remove();
        res.status(200).json(removedPost);
    }catch(err){
        console.error("Axios error:", err
        );
        res.status(500).json({message: err});

    }
}
);

// UPDATE A POST
router.patch('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id:req.params.id}, { $set: { title: req.body.title, description: req.body.description}});
        
        res.status(200).json(updatedPost);
    } catch (err) {
        console.error("Axios error:", err);
        res.status(500).json({ message: err });
    }
});

module.exports = router;
