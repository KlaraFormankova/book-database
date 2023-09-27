"use client";

import React from "react";
import BookPapersGrid from "../components/book-papers-grid";
import useBooks from "../hooks/use-books";

export default function Page() {
  const { books, setBooks } = useBooks();

  return (
    <div>
      <br />
      <BookPapersGrid books={books} />
    </div>
  );
}
