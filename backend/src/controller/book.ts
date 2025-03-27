import { BookRepo } from '../repository/book';

export const getBooksById = async (ctx) => {
  const { id } = ctx.request.params;

  const result = await BookRepo.findById(id);

  if (result) {
    ctx.body = result;
  } else {
    ctx.status = 404;
    ctx.body = { error: 'Book not found' };
    return;
  }
};

export const getBooksPaginated = async (ctx) => {
  const { limit, skip } = ctx.request.query;

  const result = await BookRepo.findAll(limit, skip);

  if (result) {
    ctx.body = result;
  } else {
    ctx.status = 404;
    ctx.body = { error: 'Books not found' };
    return;
  }
};
