//Requiring Modules

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./config/passport");

const http = require("http");
const server = http.createServer();

const chatSockets = require("./config/chat_sockets");
chatSockets(server);

const notificationSockets = require("./config/notification_sockets");
notificationSockets(server);

//Routes
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoute");
//const chatRoutes = require('./routes/chatRoutes');
const conversationRoutes = require("./routes/conversationRoutes");
const messageRoutes = require("./routes/messageRoutes");
const authRoute = require("./routes/passport_Google_Microsoft_Auth");

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser());

app.use(
  session({
    secret: "somethingsecretgoeshere",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 15 * 60 * 1000, // in milliseconds
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

//Connection to Database
/*mongoose
  .connect(
    "mongodb+srv://admin:Test123@atlascluster.ahs5ujp.mongodb.net/Users",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connection successful!"));*/

/*=======================
 My Database
=========================*/
mongoose.connect("mongodb://127.0.0.1:27017/zealyug");
const db = mongoose.connection;
db.on("error", function (err) {
  console.log(err.message);
});
db.once("open", function () {
  console.log("Successfully connected to the database");
});

app.use("/auth", authRoute);
app.use("/registeration", registerRoutes);
app.use("/login", loginRoutes);
//app.use('/messages', chatRoutes);

app.use("/conversations", conversationRoutes);
app.use("/messages", messageRoutes);

/*====================================
  ROUTE TO DELETE A USER by ID
======================================
/*const User = require("./model/user");
app.delete("/users/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("User deleted");
  } catch (error) {
    return res.status(401).json("could not delete");
  }
});*/

app.listen(8000, () => console.log("app is running on port 8000"));
