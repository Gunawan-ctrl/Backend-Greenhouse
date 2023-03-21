// const alat_model = require("../models/alat_model");
let model = require("../models/alat_model");
const { requestResponse } = require("../utils");

// let response;
const create = async (data) => {
  // console.log(data);
  await model.create(data);
  return { ...requestResponse.success, data: model };
};

const get = async () => {
  return model.find({}, { _id: false }, { lean: true });
};

const getById = async (condition) => {
  // console.log(condition);
  return model.findOne(condition, { _id: false }, { lean: true });
};

const getByEmail = async (condition) => {
  return model.find(condition, { _id: false }, { lean: true });
  // return model.aggregate([
  //   {
  //     $lookup: {
  //       from: "users",
  //       localField: "EMAIL",
  //       foreignField: "EMAIL",
  //       as: "data_user  "
  //     }
  //   }
  // ]);
};

const updateOne = async (condition, body) => {
  return model.updateOne(condition, body);
  // return model.findOne(condition, { _id: false }, { lean: true });
};

const deleteOne = async (condition) => {
  return model.deleteOne(condition);
  // return model.findOne(condition, { _id: false }, { lean: true });
};

// ALAT
const getalat2 = async (condition) => {
  return model.find(condition, { _id: false }, { lean: true });
};

module.exports = {
  create,
  get,
  getById,
  getByEmail,
  updateOne,
  deleteOne,
  getalat2
};
