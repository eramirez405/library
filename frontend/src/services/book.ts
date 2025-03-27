import { QueryFunctionContext } from "@tanstack/react-query";
import Api from "./serverClient";

export interface Book {
  id: number;
  title: string;
  cover: string;
  authorId: number;
  authorName: string;
  description: string;
  publisher: string;
  publishDate: Date;
  pagesNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

export const getBooksPaginated = async (
  ctx: QueryFunctionContext<
    [
      string,
      {
        limit: number;
        skip: number;
      }
    ]
  >
): Promise<Book[]> => {
  const query = ctx.queryKey[1];
  const { limit, skip } = query;

  const { data } = await Api.get("/book/?limit=" + limit + "&skip=" + skip);
  return data;
};

export const getBook = async (
  ctx: QueryFunctionContext<[string, number]>
): Promise<Book> => {
  const bookId = ctx.queryKey[1];

  const { data } = await Api.get("/book/" + bookId);
  return data;
};
