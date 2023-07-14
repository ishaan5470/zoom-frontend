// REQUIRING MODULES
const express = require("express");
//DECLARING EXPRESS GLOBALLY
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const http = require("http");
const path = require("path");
const fs = require("fs");
const { Server } = require("socket.io");
// const cookieParser = require('cookie-parser');

//Routes
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoute");
const chatRoutes = require("./routes/chatRoutes");

const jobs = require("./routes/jobs");
const mainjob = require("./routes/postRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");
const resume = require("./routes/resume");
const company = require("./routes/company");
const posts = require("./routes/postRoutes");

const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());

// messages
// const Message = require('./models/Message')
// const UserProfile = require('./models/userprofile')

// Cookie Parser
app.use(cookieParser());

//CONFIGURATION
dotenv.config();

// get forms data
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(express.json({ limit: "10kb" }));

app.use(bodyparser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// static files
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
app.use("/users", userProfileRoutes);
app.use("/resume", resume);
app.use("/jobs", jobs);
app.use("/company", company);
app.use("/posts", posts);
app.use("/", mainjob);

app.use("/registeration", registerRoutes);
app.use("/login", loginRoutes);
app.use("/messages", chatRoutes);
//MONGOOSE SETUP
const PORT = process.env.PORT || 5000;

const connectionString =
  "mongodb+srv://zealyugdb:13579@rajat.6amwvj8.mongodb.net/";

// Establish the database connection
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for connection status
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

// //CREATING SERVER
const server = http.createServer(app);

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

/*=================================
  USER PROFILE - FILE UPLOAD ACTION
===================================*/
app.post("/upload", upload.single("photo"), async (req, res) => {
  console.log(req.file);
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const updatedUser = await UserProfile.findByIdAndUpdate(req.body.id, {
    profilePhotoUrl: `/uploads/${req.file.filename}`,
  });
  if (updatedUser.profilePhotoUrl) {
    const previousImage = `public${updatedUser.profilePhotoUrl}`;
    fs.unlinkSync(previousImage);
  }
  try {
    await updatedUser.save();
    res.send("File uploaded successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving the image URL.");
  }
});

const UserPost = require("./models/UserPost");


// server.listen(8080, () => console.log("app is listening at 8080"));
server.listen(8000, () => console.log("app is listening at 8000"));