const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user_controller");

// const { checkRequest, requiredRequest } = require("../utils");

router.post(
  "/create",
  // checkRequest(requiredRequest.authorization),
  controllers.registrasi
);

router.get(
  "/get-role-user",
  // checkRequest(requiredRequest.authorization),
  controllers.getRoleUser
);

router.get(
  "/get-role-user-admin",
  // checkRequest(requiredRequest.authorization),
  controllers.getRoleUserAdmin
);

router.get(
  "/get-role-user-toko/:guid",
  // checkRequest(requiredRequest.authorization),
  controllers.getByIdUser
);

// router.put(
//   "/:guid",
//   // checkRequest(requiredRequest.authorization),
//   controllers.updateOne
// );

router.delete(
  "/:guid",
  // checkRequest(requiredRequest.authorization),
  controllers.deleteOne
);

module.exports = router;
