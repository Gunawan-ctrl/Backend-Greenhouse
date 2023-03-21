const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;
var path = require("path");
var scriptName = path.basename(__filename);
const colname = scriptName.split("_");
const collectionName = colname[0];
const cahayaSchema = new mongoose.Schema(
  {
    GUID: {
      type: String
    },
    ID_TANAMAN: {
      type: String
    },
    ID_ALAT: {
      type: String
    },
    MAC_ADDRESS: {
      type: String
    },
    ID_USER: {
      type: String
    },
    TGL_GANTI_WARNA: {
      type: String
    },
    TGL_PANEN: {
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
module.exports = mongoose.model(collectionName, cahayaSchema);
