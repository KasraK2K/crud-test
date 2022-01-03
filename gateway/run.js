const nodemon = require("nodemon");

nodemon({ script: "server.js" })
  .on("start", console.clear)
  .on("restart", console.clear)
  .on("crash", () => {
    console.error("\nApplication has crashed!\n");
  })
  .on("quit", () => {
    console.log("\nApplication has quitted!\n");
    process.kill(process.pid, "SIGKILL");
    process.exit();
  });
