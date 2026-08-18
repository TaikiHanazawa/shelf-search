import { useState } from "react";

function App() {
  const [bookQuery, setBookQuery] = useState("");
  const [submittedBookQuery, setSubmittedBookQuery] = useState("");

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
    </main>
  );
}

export default App;
