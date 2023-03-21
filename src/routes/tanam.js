const express = require("express");
const router = express.Router();
const controllers = require("../controllers/tanam_controller");

const { checkRequest, requiredRequest } = require("../utils");

router.post(
  "/create",
  checkRequest(requiredRequest.authorization),
  controllers.create
);

router.get("/", checkRequest(requiredRequest.authorization), controllers.get);

router.get(
  "/:guid",
  checkRequest(requiredRequest.authorization),
  controllers.getById
);

router.get(
  "/get/getByIdTanaman/:id_tanaman",
  checkRequest(requiredRequest.authorization),
  controllers.getByIdTanaman
);

router.get(
  "/get/getByIdAlat/:id_alat",
  checkRequest(requiredRequest.authorization),
  controllers.getByIdAlat
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

// GET MAC_ADDRESS
router.get(
  "/getByMacAddress/:mac_address",
  // checkRequest(requiredRequest.authorization),
  controllers.getMacAddress
);

// GET BYIDUSER
router.get(
  "/getByIdUser/:id_user",
  checkRequest(requiredRequest.authorization),
  controllers.getByIdUser
);

module.exports = router;
