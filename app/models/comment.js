'use strict'
var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    body: String,
    type: String,
    created: Date,
    votes: Number
});

var Comment = mongoose.model('Comments', CommentSchema);