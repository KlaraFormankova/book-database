"use client";

import React, { useEffect } from "react";

import { IBook } from "../types/global";
import BookPapersGrid from "../components/book-papers-grid";

export default function Page() {
  const [books, setBooks] = React.useState<IBook[]>([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/d0565cee39e94d10a4eee4dd3153b12b/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <BookPapersGrid books={books} />;
}
