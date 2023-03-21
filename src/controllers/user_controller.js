const user_service = require("../services/user_service");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");
// const joi = require("joi");
const { v4 } = require("uuid");

let response;

// REGISTRASI
const registrasi = async (req, res) => {
  try {
    req.body.GUID = v4();
    console.log(req.body);
    const user = await user_service.registrasi(req.body);
    response = { ...user };
  } catch (err) {
    logger.error(err);
    response = { ...requestResponse.server_error };
  }
  res.status(response.code).json(response);
};

// GETROLE
const getRoleUser = async (req, res) => {
  try {
    const data = await user_service.get({ ROLE: "2" });
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const getRoleUserAdmin = async (req, res) => {
  try {
    const data = await user_service.get({ ROLE: "1" });
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const getByIdUser = async (req, res) => {
  try {
    const data = await user_service.getByIdUser({ GUID: req.params.guid });
    // console.log(data);
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

// const updateOne = async (req, res) => {
//   try {
//     req.body.UPDATED_AT = new Date();
//     const data = await user_service.updateOne({ GUID: req.params.guid }, req.body);
//     response = { ...requestResponse.success, data };
//   } catch (error) {
//     logger.error(error);
//     response = { ...requestResponse.server_error };
//   }
//   res.json(response);
// };

const deleteOne = async (req, res) => {
  try {
    const data = await user_service.deleteOne({ GUID: req.params.guid });
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

module.exports = {
  registrasi,
  getRoleUser,
  getRoleUserAdmin,
  getByIdUser,
  // updateOne,
  deleteOne
};
