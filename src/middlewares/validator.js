const joi = require("joi");
const { requestResponse } = require("@pptik/galileo");

function validateExpress (scheme) {
  return async (req, res, next) => {
    let response;

    try {
      await scheme.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      response = { ...requestResponse.incomplete_body };
      if (error instanceof joi.ValidationError) {
        const errors = error.details.map(({ path }) => path[0]);
        response = { ...response, data: { path: errors } };
        response.message = "Invalid pattern for validation";
      }

      return res.status(response.code).json(response);
    }
  };
}

function validate (field, scheme) {
  return scheme.validateAsync(field, { abortEarly: false });
}

module.exports = {
  validateExpress,
  validate
};
