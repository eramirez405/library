import { integer, pgTable, varchar, timestamp, text, unique } from 'drizzle-orm/pg-core';

export const authors = pgTable('authors', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: varchar('name', { length: 255 }).notNull(),
  details: text('details').notNull(),
});

export type Authors = typeof authors.$inferSelect;

export const books = pgTable('books', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: varchar('title', { length: 255 }).notNull(),
  cover: text('cover').notNull(),
  authorId: integer('author_id')
    .references(() => authors.id, { onDelete: 'cascade' })
    .notNull(),
  description: text('description').notNull(),
  publisher: varchar('publisher', { length: 255 }).notNull(),
  publishDate: timestamp('publish_date').notNull(),
  pagesNumber: integer('pages_number').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Books = typeof books.$inferSelect;

export const pages = pgTable(
  'pages',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    bookId: integer('book_id')
      .references(() => books.id, { onDelete: 'cascade' })
      .notNull(),
    pageNumber: integer('page_number').notNull(),
    plainTextContent: text('plain_text_content'),
    htmlContent: text('html_content'),
  },
  (t) => [unique().on(t.bookId, t.pageNumber)]
);

export type Pages = typeof pages.$inferSelect;

export const publishers = pgTable('publishers', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: varchar('name', { length: 255 }).notNull(),
});
