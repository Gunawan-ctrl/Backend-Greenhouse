require("dotenv").config();
const jwt = require("jsonwebtoken");
const { requestResponse } = require("../utils");
const { readFileSync } = require("fs");
const publicKey = readFileSync("./public.key", "utf-8");

/**
 * Express middleware to parse bearer token and extract its value
 * @function
 * @returns {function(...[*]=)}
 */
module.exports = () => {
  return async (req, res, next) => {
    let valid = true;
    let token;
    if (req.headers && req.headers.authorization) {
      const parts = req.headers.authorization.split(" ");
      if (parts[0] !== "Basic") {
        if (parts.length === 2 && parts[0] === "Bearer") {
          try {
            token = await jwt.verify(parts[1], publicKey);
            req.guid = token.guid;
            req.email = token.email;
            // req.guid_profile = token.guid_profile ? token.guid_profile : "";
            req.username = token.username;
            req.password = token.password;
            // req.institusi_code = token.institusi_code;
            // req.institution = token.institution ? token.institution : "";
          } catch (error) {
            // const response = { ...requestResponse.unauthorized };
            // response.message = "Invalid token";

            // return res.json(response);
          }
        } else {
          valid = false;
        }
      }
    }

    if (!valid) {
      const response = { ...requestResponse.incomplete_body };
      response.message = "Malformed token supplied";
      return res.status(response.code).json(response);
    } else {
      next();
    }
  };
};
