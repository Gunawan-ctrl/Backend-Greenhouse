require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const logger = require("./src/utils/logger");

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  logger.info(`Server started on port ${process.env.PORT}`);
});
