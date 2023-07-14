const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
},{timestamps: true })

const commentSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  description:String,
},{timestamps: true })

const skillPostSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  userName: String,
  postImage: String,
  postDescription: String,
  likes: [likesSchema],
  comment: [commentSchema],
  createdAt: Date,
},{timestamps: true });

// userPostSchema.pre("save", function (next) {
//   this.createdAt = Date.now() - 1000;
//   next();
// });

const skillPost = mongoose.model("skillPost", skillPostSchema);

module.exports = skillPost;
