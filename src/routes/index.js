const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controller");
// const { requestResponse } = require("../utils/index");

const user = require("./user");
const tanaman = require("./tanaman");
const alat = require("./alat");
const kebun = require("./kebun");
const settanam = require("./tanam");
const setcahaya = require("./cahaya");

// let response;

// router.get("/", (req, res) => {
//   response = requestResponse.success;
//   response.message = "Greenhhouse Di era 4.0";
//   res.status(response.code).json(response);
// });

router.post(
  "/users/login",
  // checkRequest(requiredRequest.admin_login),
  authController.login
);

router.use("/users", user);
router.use("/tanaman", tanaman);
router.use("/alat", alat);
router.use("/kebun", kebun);
router.use("/tanam", settanam);
router.use("/cahaya", setcahaya);
module.exports = router;
