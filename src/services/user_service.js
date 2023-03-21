const bcrypt = require("bcrypt");
const user_model = require("../models/user_model");
const { requestResponse } = require("../utils");

let response;
const registrasi = async (data) => {
  const cekData = await user_model.findOne(
    { EMAIL: data.EMAIL },
    { _id: false },
    { lean: true }
  );

  if (cekData !== undefined && cekData !== null) {
    response = { ...requestResponse.unprocessable_entity };
    response.message = "Email ini sudah terdaftar.";
    return response;
  }

  const saltRounds = 12;
  const hashPassword = await bcrypt.hash(data.PASSWORD, saltRounds);
  data.PASSWORD = hashPassword;

  await user_model.create(data);

  return { ...requestResponse.success, data: user_model };
};

const get = async (condition) => {
  return user_model.find(condition, { _id: false }, { lean: true });
};

const getRoleUserAdmin = async (condition) => {
  return user_model.find(condition, { _id: false }, { lean: true });
};

const getByIdUser = async (condition) => {
  return user_model.find(condition, { _id: false }, { lean: true });
  // return model.aggregate([
  //   {
  //     $lookup: {
  //       from: "users",
  //       localField: "ID_USER",
  //       foreignField: "GUID",
  //       as: "data_user"
  //     }
  //   }
  // ]);
};

// const updateOne = async (condition, body) => {
//   return user_model.updateOne(condition, body);
//   // return model.findOne(condition, { _id: false }, { lean: true });
// };

const deleteOne = async (condition) => {
  return user_model.deleteOne(condition);
  // return model.findOne(condition, { _id: false }, { lean: true });
};

module.exports = {
  registrasi,
  get,
  getRoleUserAdmin,
  getByIdUser,
  // updateOne,
  deleteOne
};
