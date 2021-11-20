const express = require('express')
const mongoose = require('mongoose')

const PostMessage = require('../models/postschema')

const getPosts = async (req, res) => {
    try {
        const PostMessages = await PostMessage.find();

        if(PostMessages.length < 1) {
            res.status(200).json({ message: "no posts" });
        } else {
            res.status(200).json(PostMessages);
        }
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

const getPost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `No post with id: ${id}` });

    try {
        const post = await PostMessage.findById(id);

        if(post.length < 1){
            res.status(200).json({ message: "no posts with the given id" });
        } else {
            res.status(200).json(post) 
        }

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createPost = async (req, res) => {
    const { title, description, category, creator, link, selectedFile } = req.body;

    const newPostMessage = new PostMessage({ title, description, category, creator, link, selectedFile })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description, category, creator, link, selectedFile } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `No post with id: ${id}` });

    const updatedPost = { title, description, category, creator, link, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `No posts with id: ${id}` });

    await PostMessage.findByIdAndDelete(id);

    res.json({ message: "post deleted sucessfully." });
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} 