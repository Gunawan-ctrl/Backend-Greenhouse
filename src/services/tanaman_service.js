let model = require("../models/tanaman_model");
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

const getByIdUser = async (condition) => {
  return model.find(condition, { _id: false }, { lean: true });
  // return model.aggregate([
  //   {
  //     $match: condition
  //   },
  //   {
  //     $lookup: {
  //       from: "users",
  //       localField: "ID_USER",
  //       foreignField: "GUID",
  //       as: "data_user"
  //     }
  //   },
  //   {
  //     $unwind: "$data_user"
  //   }
  // ]);
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

// ALAT
const getalat = async () => {
  return model.find({}, { _id: false }, { lean: true });
};

module.exports = {
  create,
  get,
  getById,
  getByIdUser,
  updateOne,
  deleteOne,
  getalat
};
