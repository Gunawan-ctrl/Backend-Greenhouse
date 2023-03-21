const express = require("express");
const router = express.Router();
const controllers = require("../controllers/kebun_controller");

const { checkRequest, requiredRequest } = require("../utils");

router.post(
  "/create",
  checkRequest(requiredRequest.authorization),
  controllers.create
);

router.get(
  "/",
  checkRequest(requiredRequest.authorization),
  controllers.get
);

router.get(
  "/:guid",
  checkRequest(requiredRequest.authorization),
  controllers.getById
);

router.put(
  "/:guid",
  checkRequest(requiredRequest.authorization),
  controllers.updateOne
);

router.delete(
  "/:guid",
  checkRequest(requiredRequest.authorization),
  controllers.deleteOne
);

module.exports = router;
