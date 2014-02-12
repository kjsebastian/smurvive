var mongoose = require('mongoose');
var Comment = mongoose.model('comment');

//Create comment
exports.create = function(req, res) {
    var comment = new Comment(req.body);

    comment.save(function(err) {
        if (err) {
            res.send("bad comment");
        }
    });
};

// Get all comments
exports.allComments = function(req, res) {
    Comment.find(function(err, comments) {
        if (err) {
            res.send("cannot get");
        }
        res.json(comments);
    });
};