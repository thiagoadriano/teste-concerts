const { json, urlencoded } = require("express");
const helmet = require("helmet");
const cors = require("cors");

class MiddlewareConfig {
  constructor(Server) {
    this.server = new Server();
    this.dataParse();
    this.security();
  }

  dataParse() {
    this.server.use(json());
    this.server.use(urlencoded({ extended: true }));
  }

  security() {
    this.server.disable("x-powered-by");
    this.server.use(helmet());
    this.server.use(cors());
  }
}

module.exports = MiddlewareConfig;
