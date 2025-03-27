import { Joi } from 'koa-joi-router';

export const booksPaginatedQuery = Joi.object({
  limit: Joi.number(),
  skip: Joi.number(),
});

export const bookByIdParam = Joi.object({
  id: Joi.number().required(),
});

export const bookPayload = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  cover: Joi.string().required(),
  authorName: Joi.string().required(),
  description: Joi.string().required(),
});

export const bookListPayload = Joi.array().items(bookPayload);

export const bookByIdPayload = bookPayload.keys({
  authorId: Joi.number().required(),
  publisher: Joi.string().required(),
  publishDate: Joi.date().required(),
  pagesNumber: Joi.number().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
});
