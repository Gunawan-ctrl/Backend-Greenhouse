require("dotenv").config();
const service = require("../services/kebun_service");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");
const { v4 } = require("uuid");

let response;

const create = async (req, res) => {
  try {
    req.body.GUID = v4();
    console.log(req.body);
    const data = await service.create(req.body);
    response = { ...data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const get = async (req, res) => {
  try {
    const data = await service.get();
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const getById = async (req, res) => {
  try {
    const data = await service.getById({ GUID: req.params.guid });
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const updateOne = async (req, res) => {
  try {
    req.body.UPDATED_AT = new Date();
    const data = await service.updateOne({ GUID: req.params.guid }, req.body);
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const deleteOne = async (req, res) => {
  try {
    const data = await service.deleteOne({ GUID: req.params.guid });
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

module.exports = {
  create,
  get,
  getById,
  updateOne,
  deleteOne
};
