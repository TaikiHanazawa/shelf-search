import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  pages: number;
};

const mockBooks: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    pages: 281,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    pages: 328,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    pages: 180,
  },
];

function App() {
  const [bookQuery, setBookQuery] = useState("");
  const [submittedBookQuery, setSubmittedBookQuery] = useState("");
  const filteredBooks = mockBooks.filter((book) =>
    book.title.toLowerCase().includes(submittedBookQuery.toLowerCase()),
  );

  return (
    <main>
      <h1>BookScout</h1>
      <p>Explore Books</p>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const trimmedBookQuery = bookQuery.trim();

          if (!trimmedBookQuery) {
            return;
          }

          setSubmittedBookQuery(trimmedBookQuery);
        }}
      >
        <label htmlFor="query">Search Books</label>
        <input
          id="query"
          type="search"
          value={bookQuery}
          onChange={(event) => setBookQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <p>Current query: {bookQuery}</p>
      <p>Submitted query: {submittedBookQuery}</p>

      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Pages: {book.pages}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
