import * as Router from 'koa-joi-router';
import bookRouter from './book';
import pageRouter from './page';
import normalizedSpec from './swagger';
import { koaSwagger } from 'koa2-swagger-ui';

const router = new Router();

router.use('/book', bookRouter.middleware());
router.use('/book', pageRouter.middleware());
router.get('/_api.json', async (ctx) => {
  ctx.body = JSON.stringify(normalizedSpec, null, '');
});

router.get(
  '/docs',
  koaSwagger({
    hideTopbar: true,
    swaggerOptions: {
      url: '/_api.json',
    },
  })
);

export default router;
