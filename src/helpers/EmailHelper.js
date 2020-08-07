const validator = require("email-validator");

module.exports = {
  emailValidator(email) {
    return validator.validate(email);
  },
};
