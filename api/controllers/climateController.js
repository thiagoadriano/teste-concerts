class ClimateController {
  getAllData(req, res, next) {
    res.json({ teste: "ok" });
  }

  getDayData(req, res, next) {}

  getRangeData(req, res, next) {}
}

module.exports = ClimateController;
