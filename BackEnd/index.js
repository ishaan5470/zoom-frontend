// REQUIRING MODULES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieParser = require('cookie-parser')
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
// const cookieParser = require('cookie-parser');

//Routes
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoute');
const chatRoutes = require('./routes/chatRoutes');

const jobs = require("./routes/jobs");
const mainjob = require("./routes/postRoutes");
const userProfileRoutes = require('./routes/userProfileRoutes')
const resume = require("./routes/resume");
const company = require("./routes/company");
const posts = require("./routes/postRoutes")

// messages
// const Message = require('./models/Message')
// const UserProfile = require('./models/userprofile')

//DECLARING EXPRESS GLOBALLY
const app = express();

// Cookie Parser
app.use(cookieParser())

//CONFIGURATION
dotenv.config();

// get forms data
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(express.json({ limit: '10kb' }));

app.use(bodyparser.json())
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
app.use('/posts', posts)
app.use("/", mainjob);

app.use('/registeration', registerRoutes);
app.use('/login', loginRoutes);
app.use('/messages', chatRoutes);
//MONGOOSE SETUP
const PORT = process.env.PORT || 5000;

// mongoose.set("strictQuery", true);
// const DB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB connection successful!"));

const connectionString = 'mongodb+srv://zealyugdb:13579@rajat.6amwvj8.mongodb.net/';

// Establish the database connection
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for connection status
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// //CREATING SERVER
const server = http.createServer(app);

// // Setting sockets connection
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });

// io.on("connection", (socket) => {
//   socket.on('join_room', (room) => {
//     socket.join(room)
//     console.log('User Joined Room: ' + room)
//   })

//   socket.on('send_message', async (data) => {
//     try {
//       const { room, message } = data
//       /*
//         Storing message in given room here!
//       */
//       const sender = await UserProfile.findOne({ userid: req.user._id })
//       // const sender = await UserProfile.findOne({_id: "64356277fb99aceedccc28d7"})
//       const messageData = await Message.findOne({ roomid: room })
//       const newMessage = {
//         data: message,
//         userid: sender._id,
//         time: Date.now() - 1000
//       }
//       let messageChats = [...messageData.message, newMessage]

//       // updating in database
//       await Message.updateOne({ roomid: room }, { $set: { message: messageChats } })

//       // Sending received message!
//       socket.to(room).emit('receive_message', newMessage)

//     } catch (err) {
//       console.log('Socket logic failed somewhere...', err)
//     }
//   })

//   // disconnect a user
//   socket.on('disconnect', () => {
//     console.log('User Disconnected')
//   })

// });

// server.listen(8080, () => console.log("app is listening at 8080"));
server.listen(8000, () => console.log("app is listening at 8000"));

// exporting io
// module.exports = io