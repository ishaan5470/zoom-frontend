const UserProfile = require("../models/userprofile");
const UserPost = require("../models/UserPost");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("invalid file sent"), false);
  }
};

exports.resizeUserPhoto = async (req, res, next) => {
  if (req.body.id) {
    // hitting this function from editPost API
    const post = await UserPost.findById({ _id: req.body.id });
    req.body = { ...req.body, postName: post?.postName };
  }
  if (!req.file) {
    return next();
  }
  let fName, store;
  if (req.body.postName) {
    fName = `user-${req.body.postName}-${Date.now()}.jpeg`;
    store = `public/img/userpost/${fName}`;
  } else {
    fName = `user-${req.body.firstName}-${Date.now()}.jpeg`;
    store = `public/img/userprofile/${fName}`;
  }
  req.file.filename = fName;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(store);

  next();
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single("profile");
exports.uploadUserPost = upload.single("image");

// exports.updateUserProfile = async (req, res) => {
//   try {
//     const filteredBody = { ...req.body };
//     if (req.file) {
//       filteredBody.profile = req.file.filename;
//     }
//     await UserProfile.updateOne(
//       { userid: req.user._id },
//       { $set: filteredBody }
//     );
//     const result = await UserProfile.find({ userid: req.user._id });
//     return res.status(200).json({
//       status: "success",
//       message: {
//         data: result,
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

/*=========================
  CREATE NEW USER
===========================*/
exports.createUserProfile = async (req, res) => {
  try {
    const newUserProfile = new UserProfile(req.body);
    newUserProfile.save();
    return res.status(200).json({
      message: "User profile is successfully created",
      data: newUserProfile,
    });
  } catch (error) {
    return res.json(500).json("error in creating the new user profile");
  }
};

// exports.updateUserProfile = async (req, res) => {
//   try {
//     const filteredBody = { ...req.body };
//     if (req.file) {
//       filteredBody.profile = req.file.filename;
//     }
//     await UserProfile.updateOne(
//       { userid: req.body.id },
//       { $set: filteredBody }
//     );
//     const result = await UserProfile.findById(req.body.id);
//     return res.status(200).json({
//       status: "success",
//       message: {
//         data: result,
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

exports.updateUserProfile = async (req, res) => {
  try {
    //const filteredBody = { ...req.body };
    let filteredBody = {};
    // if (req.file) {
    //    filteredBody.profile = req.file.filename;
    // }
    for (const key in req.body) {
      if (req.body.hasOwnProperty(key) && req.body[key] !== "") {
        filteredBody[key] = req.body[key];
      }
    }
    console.log(filteredBody);
    const result = await UserProfile.findByIdAndUpdate(
      req.body.userid,
      { $set: filteredBody },
      {
        new: true,
      }
    );
    return res.status(200).json({
      status: "success",
      message: {
        data: result,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addFollowers = async (req, res) => {
  try {
    const sender = await UserProfile.findOne({ userid: req.user._id });
    const receiver = await UserProfile.findOne({ userid: req.body.id });
    const arr = [...sender.following, receiver._id];
    const arr2 = [...receiver.followers, sender._id];
    await UserProfile.updateOne(
      { _id: sender._id },
      { $set: { following: arr } }
    );
    await UserProfile.updateOne(
      { _id: receiver._id },
      { $set: { followers: arr2 } }
    );
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const results = await UserProfile.find();
    res.status(200).json({
      data: {
        length: results.length,
        data: results,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getMyPosts = async (req, res) => {
  try {
    //commented to bypass auth middleware
    // const userId = await UserProfile.findOne({ userid: req.user._id })
    const userId = await UserProfile.findOne({ userid: req.body.id });
    console.log("Lol it works");
    const results = await UserPost.find({ userid: userId._id });
    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        length: results.length,
        data: results,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createUserPost = async (req, res) => {
  try {
    // const userId = await UserProfile.findOne({ userid: req.user._id })
    // console.log(req.body)

    const userId = await UserProfile.findOne({ userid: req.body.id });
    // console.log(req.body.id)
    const filteredBody = { ...req.body, userid: userId._id };
    if (req.file) {
      filteredBody.image = req.file.filename;
    }
    const result = await UserPost.create({ ...filteredBody });
    res.status(200).json({
      status: "success",
      message: {
        data: result,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addLike = async (req, res) => {
  // add unlike feature
  try {
    const userId = await UserProfile.findOne({ userid: req.body.userid });
    // const userId = await UserProfile.findOne({ userid: req.user._id })
    const postid = req.body.postid;

    const post = await UserPost.findById({ _id: postid });
    let newLikes = [...post.likes];

    if (newLikes.includes(userId.userid)) {
      newLikes = newLikes.filter((like) => like !== userId.userid);
    } else {
      newLikes.push(userId.userid);
    }

    const result = await UserPost.updateOne(
      { _id: postid },
      { $set: { likes: newLikes } }
    );

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.editPost = async (req, res) => {
  try {
    const post = await UserPost.findById({ _id: req.body.id });
    const filteredBody = {};
    if (req.body.description) {
      filteredBody.description = req.body.description;
    }
    if (req.file) {
      fs.unlinkSync(`public/img/userpost/${post.image}`);
      filteredBody.image = req.file.filename;
    }
    const result = await UserPost.updateOne(
      { _id: req.body.id },
      { ...filteredBody }
    );
    res.status(200).json({
      status: "success",
      message: {
        data: result,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteMyPost = async (req, res) => {
  try {
    const post = await UserPost.findById({ _id: req.body.id });
    // delete image from app
    fs.unlinkSync(`public/img/userpost/${post.image}`);
    await UserPost.deleteOne({ _id: req.body.id });

    res.status(200).json({
      status: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteAllPosts = async (req, res) => {
  try {
    const result = await UserPost.deleteMany({});
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getMyProfile = async (req, res) => {
  try {
    // const user = await UserProfile.findOne({ userid: req.user._id })
    console.log(req.body.id);
    const user = await UserProfile.findById(req.body.id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.homePagePosts = async (req, res) => {
  try {
    // const user = await UserProfile.findOne({ userid: req.user._id })
    const user = await UserProfile.findOne({ userid: req.body.id });
    console.log(user);
    const posts = await UserPost.find();
    let postsArr = [];
    let users = [user._id.toString(), ...user.followers, ...user.following];
    posts.map((post) => {
      if (users.includes(post.userid)) postsArr.push(post);
    });
    postsArr = postsArr.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    res.status(200).json({
      status: "success",
      data: {
        length: postsArr.length,
        posts: postsArr,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const result = await UserPost.find();
    res.status(200).json({
      status: "success",
      data: {
        length: result.length,
        data: result,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.addComment = async (req, res) => {
  // add uncomment feature
  try {
    // const userId = await UserProfile.findOne({ userid: req.user._id })
    const userId = await UserProfile.findOne({ userid: req.body.id });
    const postid = req.body.postid;
    let com = {
      date: Date.now() - 1000,
      description: req.body.description,
      commentUserId: userId.userid,
    };
    const post = await UserPost.findById({ _id: postid });
    // further implement, not to add more than once
    let newComments = [...post.comment, com];
    const result = await UserPost.updateOne(
      { _id: postid },
      { $set: { comment: newComments } }
    );
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addUserTest = async (req, res) => {
  try {
    const savedUserProfile = await UserProfile.create(req.body);

    res.status(201).json(savedUserProfile);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the user profile" });
  }
};
