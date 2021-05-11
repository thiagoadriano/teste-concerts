const express = require("express");

let _app = null;

class ExpressInstance {
  constructor() {
    if (_app === null) {
      _app = express();
    }
    return _app;
  }
}

module.exports = ExpressInstance;
