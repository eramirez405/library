import { QueryFunctionContext } from "@tanstack/react-query";
import Api from "./serverClient";

export interface Page {
  id: number;
  title: string;
  pageNumber: number;
  numberOfPages: number;
  plainTextContent: string;
  htmlContent: string;
}

export const getPage = async (
  ctx: QueryFunctionContext<[string, number, number, string]>
): Promise<Page> => {
  const [, bookId, pageNumber, format] = ctx.queryKey;

  const { data } = await Api.get(
    `/book/${bookId}/page/${pageNumber}/${format}`
  );
  return data;
};
