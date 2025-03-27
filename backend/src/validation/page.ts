import { Joi } from 'koa-joi-router';

export const pageByBookAndPageNumber = Joi.object({
  bookId: Joi.number().required(),
  pageNumber: Joi.number().required(),
  format: Joi.string().valid('plainText', 'html').required(),
});

export const pagePayload = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  pageNumber: Joi.number().required(),
  numberOfPages: Joi.number().required(),
  plainTextContent: Joi.string(),
  htmlContent: Joi.string(),
});
