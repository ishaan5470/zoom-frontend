// REQUIRING MODULES
const Post = require("../models/Post");
const Company = require("../models/Company");
const jwt = require("jsonwebtoken");
const ObjectId = require('mongoose').Types.ObjectId;

/* CREATE */
exports.createPost = async (req, res) => {
  const id=req.user._id;
  try {
          const company = await Company.findOne({ userid: id});
          if (company) {
            const book = await Post.create({
              companyId:company._id,
              logo:company.logo,
              ...req.body
            });
            return res.status(201).json({
              status: "success",
              message: "Job Successfully Posted",
              book,
            });
          } else {
            res
              .status(404)
              .json({ status: "error", message: "No Company Found" });
          }
        }
      
   catch (error) {
    res.status(409).json({ status: "error", message: error.message });
  } 
};

/* READ */
exports.getPosts = async (req, res) => {
  try {
    const id=req.user._id;
    const company = await Company.findOne({ userid: id});
    const data = await Post.find({ companyId: company._id});
    res.status(200).json({ status: "success", data });
  } catch (error) {
    res.status(404).json({ status: "error", message: error.message });
  }
};

/* UPDATE */
exports.updatePost = async (req, res) => {
  //console.log(req.body);
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      
    );
    res.status(200).json({ status: "success", message:"Update Successfully", updatedPost })
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", message: error.message });
  }
};

/* DELETE */
exports.deletePost = async (req, res) => {
  //console.log(req.params);
  try {
    const { id } = req.params;
    const post = await Post.deleteOne({ _id: id });
    res.status(200).json({ status: "success", message: "Delete Successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
