const socketIO = require("socket.io");
const socketIoPort = 9900;
module.exports = function (server) {
  const io = socketIO(server);
  io.listen(socketIoPort, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  console.log(`Notification sockets - Socket.IO is running on port 9900`);

  io.on("connection", (socket) => {
    console.log(`Client connected  ${socket.id}`);

    // Emit a welcome notification to the connected client
    socket.emit("notification", { message: "Welcome! You are now connected." });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`Client disconnected ${socket.id}`);
    });
  });
};
