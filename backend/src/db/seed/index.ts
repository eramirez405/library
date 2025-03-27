import db from '../index';
import { authors, books, pages } from '../schema';
import * as fs from 'fs';
import * as path from 'path';

const authorsData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'fixtures/authors.json'), 'utf-8')
);

const booksData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'fixtures/books.json'), 'utf-8')
);

const pagesData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'fixtures/pages.json'), 'utf-8')
);

async function seedAuthors() {
  for (const author of authorsData) {
    await db.insert(authors).values(author).onConflictDoNothing().execute();
  }
  console.log('Authors seeded successfully!');
}

async function seedBooks() {
  for (const book of booksData) {
    const bookWithDate = {
      ...book,
      publishDate: new Date(book.publishDate),
    };
    await db.insert(books).values(bookWithDate).onConflictDoNothing().execute();
  }
  console.log('Books seeded successfully!');
}

async function seedPages() {
  for (const page of pagesData) {
    await db.insert(pages).values(page).onConflictDoNothing().execute();
  }
  console.log('Pages seeded successfully!');
}

async function seed() {
  try {
    await seedAuthors();
    await seedBooks();
    await seedPages();
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit();
  }
}

seed();
