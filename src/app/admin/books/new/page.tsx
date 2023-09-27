"use client";

import { IBook } from "@/app/types/global";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import BookForm from "@/app/components/book-form";
import BackToBooksBtn from "@/app/components/back-to-books-btn";

export default function Page() {
  const [books, setBooks] = useState<IBook[]>([]);

  const handleAddBook = (newBook: IBook) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    };
    fetch(
      "https://crudcrud.com/api/db50dacdac654274a04030dec14ad453/books",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks([...books, data]);
      });
  };

  return (
    <div>
      <Stack direction="row" className="justify-between">
        <Typography variant="h4" gutterBottom>
          Create a New Book
        </Typography>
        <BackToBooksBtn isAdmin={true} />
      </Stack>
      <br />
      <BookForm onUpdateBook={handleAddBook} />
    </div>
  );
}
