const mongoose = require("mongoose");
const collectionName = "users";

const userSchema = new mongoose.Schema(
  {
    GUID: {
      type: String
    },
    USERNAME: {
      type: String
    },
    EMAIL: {
      type: String
    },
    NAMA_GREENHOUSE: {
      type: String
    },
    ALAMAT: {
      type: String
    },
    NO_TELPON: {
      type: String
    },
    PASSWORD: {
      type: String
    },
    CREATED_AT: {
      type: Date,
      default: new Date()
    },
    UPDATED_AT: {
      type: Date,
      default: new Date()
    },
    ROLE: {
      type: String
    }
  },
  {
    versionKey: false,
    collection: collectionName
  }
);

module.exports = mongoose.model(collectionName, userSchema);
