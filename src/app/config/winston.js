const appRoot = require("app-root-path");
const winston = require("winston");

const options = {
  file: {
    level: "info",
    filename: `${appRoot}/src/logs/combine.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),

    new winston.transports.File({
      filename: `${appRoot}/src/logs/error.log`,
      level: "error",
    }),
  ],
  exitOnError: false,
});

logger.stream = {
  write: function (message) {
    logger.info(message);
  },
};

module.exports = logger;
