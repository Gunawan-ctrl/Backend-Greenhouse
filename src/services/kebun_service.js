let model = require("../models/kebun_model");
const { requestResponse } = require("../utils");
// let response;
const create = async (data) => {
  console.log(data);
  await model.create(data);

  return { ...requestResponse.success, data: model };
};

const get = async () => {
  return model.find({}, { _id: false }, { lean: true });
};

const getById = async (condition) => {
  return model.findOne(condition, { _id: false }, { lean: true });
};

const updateOne = async (condition, body) => {
  return model.updateOne(condition, body);
  // return model.findOne(condition, { _id: false }, { lean: true });
};

const deleteOne = async (condition) => {
  return model.deleteOne(condition);
  // return model.findOne(condition, { _id: false }, { lean: true });
};

module.exports = {
  create,
  get,
  getById,
  updateOne,
  deleteOne
};
