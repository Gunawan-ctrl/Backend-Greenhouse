const express = require("express");
const router = express.Router();
const controllers = require("../controllers/alat_controller");
const { checkRequest, requiredRequest } = require("../utils");

router.post(
  "/create",
  checkRequest(requiredRequest.authorization),
  controllers.create
);

router.get("/", checkRequest(requiredRequest.authorization), controllers.get);

// GET MAC_ADDRESS
router.get(
  "/getByMacAddressAlat/:mac_address",
  // checkRequest(requiredRequest.authorization),
  controllers.getalat2
);

router.get(
  "/getByemail/:email",
  checkRequest(requiredRequest.authorization),
  controllers.getByEmail
);

router.get(
  "/:guid",
  checkRequest(requiredRequest.authorization),
  controllers.getById
);

router.get("/", checkRequest(requiredRequest.authorization), controllers.get);

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
