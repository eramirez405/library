import bookRouter from './book';
import pageRouter from './page';

import { SwaggerAPI } from 'koa-joi-router-docs-v2';

const generator = new SwaggerAPI();

generator.addJoiRouter(bookRouter, { prefix: '/book' });
generator.addJoiRouter(pageRouter, { prefix: '/book' });

const spec = generator.generateSpec({
  info: {
    title: 'ER Library',
    description: 'API document of ER Library',
    version: '1.0.0',
  },
});

function normalizePaths(spec) {
  const paths = {};
  for (const path in spec.paths) {
    const normalizedPath = path.replace(/\/+/g, '/');
    paths[normalizedPath] = spec.paths[path];
  }
  spec.paths = paths;
  return spec;
}

const normalizedSpec = normalizePaths(spec);

export default normalizedSpec;
