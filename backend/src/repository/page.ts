import { and, eq, isNotNull } from 'drizzle-orm';
import db from '../db';
import { books, pages } from '../db/schema';

export class PageRepo {
  static async findOne(bookId: number, pageNumber: number, format: 'plainText' | 'html') {
    let formatCondition;

    switch (format) {
      case 'plainText':
        formatCondition = isNotNull(pages.plainTextContent);
        break;
      case 'html':
        formatCondition = isNotNull(pages.htmlContent);
        break;
      default:
        formatCondition = isNotNull(pages.plainTextContent);
        break;
    }

    const result = await db
      .select({
        id: pages.id,
        title: books.title,
        numberOfPages: books.pagesNumber,
        pageNumber: pages.pageNumber,
        ...(format === 'plainText' ? { plainTextContent: pages.plainTextContent } : {}),
        ...(format === 'html' ? { htmlContent: pages.htmlContent } : {}),
      })
      .from(pages)
      .leftJoin(books, eq(books.id, pages.bookId))
      .where(and(eq(pages.bookId, bookId), eq(pages.pageNumber, pageNumber), formatCondition));
    return result[0];
  }
}
