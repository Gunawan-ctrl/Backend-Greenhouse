module.exports = () => {
  return (req, res, next) => {
    if (req.headers && req.headers["X-APP-TYPE"]) {
      req.app_type = req.headers["X-APP-TYPE"];
    }
    next();
  };
};
