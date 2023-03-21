const mongoose = require("mongoose");
var path = require("path");
var scriptName = path.basename(__filename);
const colname = scriptName.split("_");
const collectionName = colname[0];
const alatSchema = new mongoose.Schema(
  {
    GUID: {
      type: String
    },
    MAC_ADDRESS: {
      type: String
    },
    NAMA_ALAT: {
      type: String
    },
    DATA_SENSOR: {
      type: String
    },
    EMAIL: {
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
module.exports = mongoose.model(collectionName, alatSchema);
