import * as Router from 'koa-joi-router';
import { pageByBookAndPageNumber, pagePayload } from '../validation/page';
import { getPageByBookAndPageNumber } from '../controller/page';

const pageRouter = new Router();

pageRouter.route({
  path: '/:bookId/page/:pageNumber/:format',
  method: 'get',
  meta: {
    swagger: {
      summary: 'Get page by book id and page number',
      tags: ['Page'],
    },
  },
  validate: {
    params: pageByBookAndPageNumber,
    output: {
      '200': {
        body: pagePayload,
      },
    },
  },
  handler: [getPageByBookAndPageNumber],
});

export default pageRouter;
