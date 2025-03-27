import { PageRepo } from '../repository/page';

export const getPageByBookAndPageNumber = async (ctx) => {
  const { bookId, pageNumber, format } = ctx.request.params;

  const result = await PageRepo.findOne(bookId, pageNumber, format);

  if (result) {
    ctx.body = result;
  } else {
    ctx.status = 404;
    ctx.body = { error: 'Page not found' };
    return;
  }
};
