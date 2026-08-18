import { useState } from "react";

function App() {
  const [bookQuery, setBookQuery] = useState("");
  return (
    <main>
      <h1>BookScout</h1>
      <p>Explore Books</p>

      <form>
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
    </main>
  );
}

export default App;
