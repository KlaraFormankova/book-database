"use client";

import BookForm from "@/app/components/book-form";
import { IBook } from "@/app/types/global";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<IBook | null>(null);

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/d0565cee39e94d10a4eee4dd3153b12b/books/${params.id}`
    )
      .then((res) => res.json())
      .then((book) => {
        setBook(book);
      });
  }, [params.id]);

  const handleUpdateBook = (updatedBook: IBook) => {
    fetch(
      `https://crudcrud.com/api/d0565cee39e94d10a4eee4dd3153b12b/books/${params.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      }
    ).then((response) => console.log(response));
    setBook(updatedBook);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Book Details
      </Typography>
      <br />
      {book && <BookForm originalBook={book} onUpdateBook={handleUpdateBook} />}
    </div>
  );
}
