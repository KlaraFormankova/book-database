import { useEffect, useState } from "react";
import { IBook } from "../types/global";

export default function useBook(id: string) {
  const [book, setBook] = useState<IBook | null>(null);

  useEffect(() => {
    if (id) {
      fetch(
        `https://crudcrud.com/api/db50dacdac654274a04030dec14ad453/books/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setBook(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  return { book, setBook };
}
