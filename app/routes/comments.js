var Comments = require('../models/comment.js')

// GET comments
exports.compliments = function(req, res) {
    Comments.find({}, function (err, docs) {
        res.json(docs);
    });
}

exports.complaints = function(req, res) {
    Comments.find({}, function (err, docs) {
        res.json(docs);
    });
}