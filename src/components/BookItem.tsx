import type { Book } from "../types/book";

type BookItemProps = {
  book: Book;
};

export function BookItem({ book }: BookItemProps) {
  return (
    <li>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Pages: {book.pages}</p>
    </li>
  );
}
