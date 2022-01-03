const express = require("express");
const app = express();
require("dotenv").config();

const globalVariables = require("./common/constants");

class Bootstrap {
  constructor() {
    this.port = Number(process.env.PORT) || 3000;
    this.middleware();
    this.config();
    this.routes();
    this.init();
  }

  middleware() {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  }

  config() {
    Object.assign(global, globalVariables);
  }

  routes() {
    app.use(require(__dirname + "/routes/index.js"));
  }

  init() {
    app.listen(this.port, () =>
      console.log(`Server started on port ${this.port}`)
    );
  }
}

new Bootstrap();
