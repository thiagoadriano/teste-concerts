const { Router } = require("express");

class ClimateRouter {
  constructor(Server, ClimateController) {
    this.server = new Server();
    this.controller = new ClimateController();

    this.server.use("/api/v1/climate", this.routesConfig());
  }

  routesConfig() {
    const router = Router();
    router.get("/", this.controller.getAllData);
    router.get("/:dataInitial", this.controller.getDayData);
    router.get("/:dateInitial/:dateFinal", this.controller.getRangeData);
    return router;
  }
}

module.exports = ClimateRouter;
