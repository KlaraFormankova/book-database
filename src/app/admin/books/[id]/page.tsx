"use client";

import BackToBooksBtn from "@/app/components/back-to-books-btn";
import BookForm from "@/app/components/book-form";
import { IBook } from "@/app/types/global";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<IBook | null>(null);

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/db50dacdac654274a04030dec14ad453/books/${params.id}`
    )
      .then((res) => res.json())
      .then((book) => {
        setBook(book);
      });
  }, [params.id]);

  const handleUpdateBook = (updatedBook: IBook) => {
    fetch(
      `https://crudcrud.com/api/db50dacdac654274a04030dec14ad453/books/${params.id}`,
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
      <div className="flex justify-end mb-3">
        <BackToBooksBtn isAdmin={true} />
      </div>
      {book && <BookForm originalBook={book} onUpdateBook={handleUpdateBook} />}
    </div>
  );
}
