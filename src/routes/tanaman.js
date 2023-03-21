const express = require("express");
const router = express.Router();
const controllers = require("../controllers/tanaman_controller");

const { checkRequest, requiredRequest } = require("../utils");

router.post(
  "/create",
  checkRequest(requiredRequest.authorization),
  controllers.create
);

router.get("/", checkRequest(requiredRequest.authorization), controllers.get);

router.get("/get",
  // checkRequest(requiredRequest.authorization),
  controllers.getalat);

router.get(
  "/getByIdUser/:id_user",
  checkRequest(requiredRequest.authorization),
  controllers.getByIdUser
);

router.get(
  "/:guid",
  // checkRequest(requiredRequest.authorization),
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
