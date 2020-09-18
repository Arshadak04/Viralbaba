const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    _id:String,
content:String
});

module.exports =mongoose.model('Post',PostSchema);