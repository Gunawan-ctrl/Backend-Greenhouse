const mongoose = require("mongoose");
var path = require("path");
var scriptName = path.basename(__filename);
const colname = scriptName.split("_");
const collectionName = colname[0];
const kebunSchema = new mongoose.Schema(
  {
    GUID: {
      type: String
    },
    NAMA_KEBUN: {
      type: String
    },
    LUAS_LAHAN: {
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
module.exports = mongoose.model(collectionName, kebunSchema);
