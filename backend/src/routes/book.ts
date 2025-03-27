import * as Router from 'koa-joi-router';
import { getBooksById, getBooksPaginated } from '../controller/book';
import {
  bookByIdParam,
  bookByIdPayload,
  bookListPayload,
  booksPaginatedQuery,
} from '../validation/book';

const bookRouter = new Router();

bookRouter.route({
  path: '/',
  method: 'get',
  meta: {
    swagger: {
      summary: 'Get all books',
      tags: ['Books'],
    },
  },
  validate: {
    query: booksPaginatedQuery,
    output: {
      '200': {
        body: bookListPayload,
      },
    },
  },
  handler: [getBooksPaginated],
});

bookRouter.route({
  path: '/:id',
  method: 'get',
  meta: {
    swagger: {
      summary: 'Get books by id',
      tags: ['Books'],
    },
  },
  validate: {
    params: bookByIdParam,
    output: {
      '200': {
        body: bookByIdPayload,
      },
    },
  },
  handler: [getBooksById],
});

export default bookRouter;
