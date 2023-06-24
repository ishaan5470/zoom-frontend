//Requiring Modules

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const http = require("http");
const chat = require("./config/chat_sockets");

// setting up socket.io
const server = http.createServer();
chat(server);

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




app.listen(8000, () => console.log("app is running on port 8000"));
