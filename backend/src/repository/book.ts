import { eq } from 'drizzle-orm';
import db from '../db';
import { authors, books } from '../db/schema';

export class BookRepo {
  static async findAll(limit: number = 10, skip: number = 0) {
    return await db
      .select({
        id: books.id,
        title: books.title,
        cover: books.cover,
        authorName: authors.name,
        description: books.description,
      })
      .from(books)
      .orderBy(books.id)
      .leftJoin(authors, eq(books.authorId, authors.id))
      .limit(limit)
      .offset(skip);
  }

  static async findById(id: number) {
    const result = await db
      .select({
        id: books.id,
        title: books.title,
        cover: books.cover,
        authorId: books.authorId,
        authorName: authors.name,
        description: books.description,
        publisher: books.publisher,
        publishDate: books.publishDate,
        pagesNumber: books.pagesNumber,
        createdAt: books.createdAt,
        updatedAt: books.updatedAt,
      })
      .from(books)
      .leftJoin(authors, eq(books.authorId, authors.id))
      .where(eq(books.id, id));
    return result[0];
  }
}
