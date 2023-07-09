const mongoose = require('mongoose');

const userPostSchema = new mongoose.Schema({
    userid: String,
    postName: String,
    image: String,
    description: String,
    likes: [{type: String}],
    comment: [
        {
            date: Date,
            description: String,
            commentUserId: String
        }
    ],
    createdAt: Date,
});

userPostSchema.pre('save', function(next) {
    this.createdAt = Date.now() - 1000;
    next();
  });

const UserPost = mongoose.model('UserPost', userPostSchema);

module.exports = UserPost;
