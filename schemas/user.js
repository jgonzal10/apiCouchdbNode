//(https://github.com/hapijs/joi#readme).
var Joi = require('joi');
module.exports = Joi.object().keys({  
  _rev: Joi.string(),
  _id: Joi.string(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
  access_token: [Joi.string(), Joi.number()],
  birthyear: Joi.number().integer().min(1900).max((new Date()).getFullYear()),
  email: Joi.string().email()
});