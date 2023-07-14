const multer = require("multer");
const skillPost = require("../models/skillPost");
const UserProfile = require("../models/userprofile");


/*===================================
  CREATE POST ACTION
=====================================*/

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/posts"); // Set the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Set the file name
  },
});

const upload = multer({ storage: storage });


const multerMiddleware = upload.single("postImage")


const createPost = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const newPost = new skillPost({
    userId: req.body.id,
    userName: req.body.userName,
    postDescription: req.body.postDescription,
    likes: [],
    comment: [],
    postImage: `/uploads/posts/${req.file.filename}`,
  });

  try {
    console.log(newPost);
    await newPost.save();
    res.send("Post uploaded successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving the post.");
  }
};

//take sender(who clicked the suppport btn) id and receivers id and add into appropriate followers and following array
const addFollowers = async (req, res) => {
  try {
      const sender = await UserProfile.findOne({ _id: req.body.senderId })
      const receiver = await UserProfile.findOne({ _id: req.body.receiverId })
      console.log(sender);
      console.log(receiver);

      // const arr = [...sender.following, receiver._id]
      // const arr2 = [...receiver.followers, sender._id]
      await UserProfile.updateOne({ _id: sender._id }, { $push: { following: receiver._id}})
      await UserProfile.updateOne({ _id: receiver._id }, { $push: { followers: sender._id }})
      res.status(200).json({
          status: "success"
      })

  } catch (err) {
      console.log(err)
  }
}

//take userId and postId to find userProfile and post
const addLike = async (req, res) => {
  // add unlike feature
  try {
      const user = await UserProfile.findOne({ userid: req.body.userid })
      // const userId = await UserProfile.findOne({ userid: req.user._id })
      const postid = req.body.postid

      const post = await skillPost.findById({ _id: postid });
      // let newLikes = [...post.likes];

      if (post.likes.includes(user.userid)) {
          // newLikes = newLikes.filter((like) => like !== user.userid);
          const result = await UserPost.updateOne({ _id: postid }, { $pull:user.userId });
          res.status(200).json({
            status: 'success',
            data: result
        })
      } else {
          const result = await UserPost.updateOne({ _id: postid }, { $push:user.userId });
          console.log(result);
          res.status(200).json({
            status: 'success',
            data: result
        })
      }
// const result = await UserPost.updateOne({ _id: postid }, { $set: { likes: newLikes } });
  } catch (err) {
      console.log(err)
  }
}



const addComment = async (req, res) => {
  // add uncomment feature
  try {
      // const userId = await UserProfile.findOne({ userid: req.user._id })
      const user = await UserProfile.findOne({ userid: req.body.id })
      const postid = req.body.postid
      let com = {
          description: req.body.description,
          userId: user.userid
      }
      // const post = await skillPost.findById({ _id: postid })
      // further implement, not to add more than once
      // let newComments = [...post.comment, com]
      const result = await UserPost.updateOne({ _id: postid }, { $push: { comment: com } })
      res.status(200).json({
          status: 'success',
          data: result
      })
  } catch (err) {
      console.log(err)
  }
}

const deleteMyPost = async (req, res) => {
  try {
      const post = await UserPost.findById({ _id: req.body.id })
      // delete image from app
      fs.unlinkSync(`public/img/userpost/${post.image}`)
      await UserPost.deleteOne({ _id: req.body.id })

      res.status(200).json({
          status: null
      })
  } catch (err) {
      res.status(400).json({
          status: 'failed',
          message: err
      })
  }
}



module.exports = {
  createPost,
  multerMiddleware,
  addFollowers,
  addLike,
  addComment
}