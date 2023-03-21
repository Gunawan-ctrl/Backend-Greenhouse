const joi = require("joi");

const registrationAdminScheme = joi
  .object({
    username: joi.string().min(5).required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).required()
  });

const registrationAdministratorScheme = joi
  .object({
    institution_guid: joi.string().min(20).max(50).required(),
    administrator_name: joi.string().min(5).max(100).required(),
    username: joi.string().min(5).required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).required()
  });

const createInstitutionScheme = joi
  .object({
    institution_type: joi.string().min(5).max(50).required(),
    institution_url: joi.string().min(5).max(50).required(),
    institution_name: joi.string().min(5).max(255).required(),
    institution_area: joi.string().min(5).max(100).required(),
    institution_district: joi.string().min(5).max(100).required()
  });

module.exports = {
  registrationAdminScheme,
  registrationAdministratorScheme,
  createInstitutionScheme
};
