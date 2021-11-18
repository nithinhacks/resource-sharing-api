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
    const { title, message, creator, link, selectedFile } = req.body;

    const newPostMessage = new PostMessage({ title, message, creator, link, selectedFile })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost
} 