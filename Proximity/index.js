// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

const { Board, Led, Proximity } = require("johnny-five");
const board = new Board();

// Variables
let valore = 0;
let connesso = false;

board.on("ready", () => {

  server.listen(port, () => {
    console.log('Server listening at port %d', port);
  });

  // Routing
  app.use(express.static(path.join(__dirname, 'public')));

  // Create a new `sensor` hardware instance.
  const proximity = new Proximity({
    controller: "HCSR04",
    pin: 7
  });

  // Connection
  io.on('connection', (socket) => {
    proximity.on("change", () => {
      const {centimeters, inches} = proximity;
      console.log("Proximity: ");
      console.log("  cm  : ", centimeters);
      console.log("  in  : ", inches);
      console.log("-----------------");
      valore = centimeters;
      socket.broadcast.emit('msg', valore);
    });
  });

});