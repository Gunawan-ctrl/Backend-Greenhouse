let model = require("../models/cahaya_model");
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

const getAllCahaya = async () => {
  const data = await model.aggregate([
    {
      $lookup: {
        from: "tanaman",
        localField: "ID_TANAMAN",
        foreignField: "GUID",
        as: "data_tanaman"
      }
    },
    {
      $unwind: "$data_tanaman"
    },
    {
      $lookup: {
        from: "alat",
        localField: "ID_ALAT",
        foreignField: "GUID",
        as: "data_alat"
      }
    },
    {
      $unwind: "$data_alat"
    },
    {
      $lookup: {
        from: "users",
        localField: "ID_USER",
        foreignField: "GUID",
        as: "data_user"
      }
    },
    {
      $unwind: "$data_user"
    }
  ]);
  return data;
};

// const getAllAlat = async () => {
//   const data = await model.aggregate([
//     {
//       $lookup: {
//         from: "alat",
//         localField: "ID_ALAT",
//         foreignField: "GUID",
//         as: "data_alat"
//       }
//     },
//     {
//       $unwind: "$data_alat"
//     }
//   ]);
//   return data;
// };

const getByIdTanaman = async (condition) => {
  // return model.find(condition, { _id: false }, { lean: true });
  return model.aggregate([
    {
      $match: condition
    },
    {
      $lookup: {
        from: "tanaman",
        localField: "ID_TANAMAN",
        foreignField: "GUID",
        as: "data_tanaman"
      }
    },
    {
      $unwind: "$data_tanaman"
    }
  ]);
};

const getByIdAlat = async (condition) => {
  // return model.find(condition, { _id: false }, { lean: true });
  return model.aggregate([
    {
      $match: condition
    },
    {
      $lookup: {
        from: "alat",
        localField: "ID_ALAT",
        foreignField: "GUID",
        as: "data_alat"
      }
    },
    {
      $unwind: "$data_alat"
    }
  ]);
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

// GET MAC ADDRESS
const getMacAddress = async (condition) => {
  return model.findOne(condition, { _id: false }, { lean: true });
};

const getByIdUser = async (condition) => {
  // return model.find(condition, { _id: false }, { lean: true });
  return model.aggregate([
    {
      $match: condition
    },
    {
      $lookup: {
        from: "tanaman",
        localField: "ID_TANAMAN",
        foreignField: "GUID",
        as: "data_tanaman"
      }
    },
    {
      $unwind: "$data_tanaman"
    },
    {
      $lookup: {
        from: "alat",
        localField: "ID_ALAT",
        foreignField: "GUID",
        as: "data_alat"
      }
    },
    {
      $unwind: "$data_alat"
    },
    {
      $lookup: {
        from: "users",
        localField: "ID_USER",
        foreignField: "GUID",
        as: "data_user"
      }
    },
    {
      $unwind: "$data_user"
    }
  ]);
};

module.exports = {
  create,
  get,
  getById,
  getByIdTanaman,
  getByIdAlat,
  updateOne,
  deleteOne,
  getMacAddress,
  getAllCahaya,
  getByIdUser
  // getAllAlat
};
