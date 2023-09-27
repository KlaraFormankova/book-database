"use client";

import React from "react";
import BookPapersGrid from "../../components/book-papers-grid";
import useBooks from "@/app/hooks/use-books";
import { Button } from "@mui/material";

export default function Page() {
  const { books, setBooks } = useBooks();

  return (
    <div>
      <div className="flex justify-end pb-3">
        <Button variant="outlined" color="primary" href="/admin/books/new">
          Add a new book
        </Button>
      </div>
      <BookPapersGrid books={books} isAdmin={true} />
    </div>
  );
}
