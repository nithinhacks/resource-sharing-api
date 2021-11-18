const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    message: {
        type: String,
        required: true,
        maxLength: 30
    },
    creator: {
        type: String,
        required: true,
        maxLength: 20
    },
    link: {
        type: String,
        required: true
    },
    selectedFile: {
        type: String
    }
})

var PostMessage = mongoose.model('PostMessage', postSchema);

module.exports = PostMessage