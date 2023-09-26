"use client";

import { IBook } from "@/app/types/global";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import BookForm from "@/app/components/book-form";

export default function Page() {
  const [books, setBooks] = useState<IBook[]>([]);

  const handleAddBook = (newBook: IBook) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    };
    fetch(
      "https://crudcrud.com/api/d0565cee39e94d10a4eee4dd3153b12b/books",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks([...books, data]);
      });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Create a New Book
      </Typography>
      <BookForm onUpdateBook={handleAddBook} />
    </div>
  );
}
