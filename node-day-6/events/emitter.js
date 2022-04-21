const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

chatEmitter.on("message", () => {
  console.log("its on");
});

chatEmitter.emit("message");
