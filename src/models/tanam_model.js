const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;
var path = require("path");
var scriptName = path.basename(__filename);
const colname = scriptName.split("_");
const collectionName = colname[0];
const settanamSchema = new mongoose.Schema(
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
    SUHU_MINIMAL: {
      type: String
    },
    SUHU_MAX: {
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
module.exports = mongoose.model(collectionName, settanamSchema);
