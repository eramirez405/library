import 'dotenv/config';
import * as dotenv from 'dotenv';
import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';

import router from './routes';

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.testing', override: true });
}

const app = new Koa();

app.use(json());
if (process.env.NODE_ENV !== 'test') app.use(logger());
app.use(bodyParser());
app.use(cors());

app.use(router.middleware());

export default app;
