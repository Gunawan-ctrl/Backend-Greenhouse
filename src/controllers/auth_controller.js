const authService = require("../services/auth_service");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");

let response;

// const login = async (req, res) => {
//   // const role = req.body.role;
//   console.log(req.body);
//   let loginResponse;
//   try {
//     const { EMAIL, PASSWORD } = req.body;
//     // console.log(EMAIL);
//     loginResponse = await authService.login({ EMAIL, PASSWORD });
//     response = { ...loginResponse };
//   } catch (error) {
//     logger.error(error);
//     response = { ...requestResponse.server_error };
//   }

//   res.json(response);
// };

const login = async (req, res) => {
  // const hostname = req.headers.origin;
  // const role = req.body.role;
  let loginResponse;
  try {
    const { EMAIL, PASSWORD, ROLE } = req.body;
    loginResponse = await authService.login({ EMAIL, PASSWORD, ROLE });
    response = { ...loginResponse };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }

  res.json(response);
};

module.exports = {
  // login,
  login
};
