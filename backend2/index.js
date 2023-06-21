//Requiring Modules

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const http = require("http");

// setting up socket.io
const socketIO = require("socket.io");
const socketIoPort = 8900;
const server = http.createServer();
const io = socketIO(server);

//Routes
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoute");
//const chatRoutes = require('./routes/chatRoutes');
const conversationRoutes = require("./routes/conversationRoutes");
const messageRoutes = require("./routes/messageRoutes");

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser());
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

app.use("/registeration", registerRoutes);
app.use("/login", loginRoutes);
//app.use('/messages', chatRoutes);

app.use("/conversations", conversationRoutes);
app.use("/messages", messageRoutes);

/*=======================
Setting sockets connection
=========================*/
io.listen(socketIoPort, {
  cors: {
    origin: "http://localhost:3000",
  },
});
console.log(`Socket.IO is running on port 8900`);

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
  console.log(users);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when connect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

app.listen(8000, () => console.log("app is running on port 8000"));
