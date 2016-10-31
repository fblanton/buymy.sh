const Joi = require('joi');

module.exports = {
  shopPostSchema: Joi.object().keys({
    _id: Joi.string(),
    shopId: Joi.number().integer(),
    shopName: Joi.string().regex(/^\S*$/).required(),
    title: Joi.string().required(),
    description: Joi.string().required()
  }),
  itemPostSchema: Joi.object().keys({
    _id: Joi.string(),
    shopName: Joi.string().regex(/^\S*$/).required(),
    title: Joi.string().required(),
    description: Joi.string().required()
  }),
  itemUpdateSchema: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required()
  })
}
