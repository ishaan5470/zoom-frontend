const multer = require("multer");
const UserProfile = require("./models/userprofile");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/posts"); // Set the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Set the file name
  },
});

const upload = multer({ storage: storage });

/*===================================
  CREATE POST ACTION
=====================================*/
app.post("/skills/createpost", upload.single("photo"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const newPost = new UserPost({
    userId: req.body.id,
    userName: req.body.userName,
    postDescription: req.body.postDescription,
    likes: [],
    comment: [],
    postImage: `/uploads/posts/${req.file.filename}`,
  });

  try {
    await newPost.save();
    res.send("Post uploaded successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving the post.");
  }
});
