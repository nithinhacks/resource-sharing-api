const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,"please provide title"],
        maxLength: 20
    },
    description: {
        type: String,
        required: [true,"please provide description"],
        maxLength: 30
    },
    category: {
        type: String,
        required: [true,"please provide category"]
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