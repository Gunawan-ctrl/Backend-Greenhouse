require("dotenv").config();
const format = require("date-fns/format");
const Logger = function () {};

/**
 * Write an info to the console
 * @param logText
 */
Logger.prototype.info = function (logText) {
  console.log(
    `[${format(new Date(), "dd-MM-yyyy HH:mm:ss")}] Info: ${logText}`
  );
};

/**
 * Write an error to the console. If the NODE_ENV is not production, it will print the error stack too.
 * @param logText
 */
Logger.prototype.error = function (logText) {
  logText =
    process.env.NODE_ENV !== "production" ? logText.stack : logText.message;
  console.log(
    `[${format(new Date(), "dd-MM-yyyy HH:mm:ss")}] Error: ${
      logText instanceof Error ? logText.message : logText
    }`
  );
};

Logger.prototype.errorWithId = function (logText, errorId) {
  console.log(
    `[${format(
      new Date(),
      "dd-MM-yyyy HH:mm:ss"
    )}] Error: ${logText}. Error ID: ${errorId}`
  );
};

module.exports = new Logger();
