require("dotenv").config();
const { neoUrl } = require("../config");
// const mongoose = require("mongoose");
const neo4j = require("neo4j-driver");

// if (process.env.NODE_ENV !== "production") {
//   neo4j.set("debug", true);
// }

/**
 * @function createConnection
 *
 * Create MongoDB connection. Configs are supplied automatically in the method
 * @returns {Promise<void>}
 */
const createConnection = async () => {
  const driver = await neo4j.driver(neoUrl, neo4j.auth.basic("neo4j", "cerD3UC8qo9Xr29PjA9x70xWhsgW0m_B08zzls5oySA"));
  await driver.session();
  // await mongoose.connect(mongoUrl, mongoOptions);
};

module.exports = {
  createConnection
};
