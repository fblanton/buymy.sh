const Joi = require('joi');

module.exports = {
  postSchema: Joi.object().keys({
    _id: Joi.string(),
    shopId: Joi.number().integer(),
    shopName: Joi.string().regex(/^\S*$/).required(),
    title: Joi.string().required(),
    description: Joi.string().required()
  })
}
