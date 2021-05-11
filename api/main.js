const ClimateController = require("./controllers/climateController");
const MiddlewareConfig = require("./run/middlewareConfig");
const ExpressInstance = require("./run/expressInstance");
const ClimateRouter = require("./routes/climateRouter");
const ServerRun = require("./run/serverRun");
const DbConfig = require("./database/connection");

require("dotenv/config");

new DbConfig();
new MiddlewareConfig(ExpressInstance);
new ClimateRouter(ExpressInstance, ClimateController);
new ServerRun(ExpressInstance);
