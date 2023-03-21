const mongoose = require("mongoose");
var path = require("path");
// const objectId = mongoose.Types.ObjectId;
var scriptName = path.basename(__filename);
const colname = scriptName.split("_");
const collectionName = colname[0];
const tanamanSchema = new mongoose.Schema(
  {
    GUID: {
      type: String
    },
    NAMA_TANAMAN: {
      type: String
    },
    JENIS_TANAMAN: {
      type: String
    },
    ID_USER: {
      type: String
    },
    HARGA: {
      type: String
    },
    DESKRIPSI: {
      type: String
    },
    LUAS_AREA_TANAM: {
      type: String
    },
    CREATED_AT: {
      type: Date,
      default: new Date()
    },
    UPDATED_AT: {
      type: Date,
      default: new Date()
    }
  },
  {
    versionKey: false,
    collection: collectionName
  }
);
module.exports = mongoose.model(collectionName, tanamanSchema);
