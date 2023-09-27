import React, { useEffect } from "react";
import { IBook } from "../types/global";

export default function useBooks() {
  const [books, setBooks] = React.useState<IBook[]>([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/db50dacdac654274a04030dec14ad453/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return { books, setBooks };
}
