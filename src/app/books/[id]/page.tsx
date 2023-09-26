"use client";

import { IBook } from "@/app/types/global";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<IBook | null>(null);

  useEffect(() => {
    if (params.id) {
      fetch(
        `https://crudcrud.com/api/d0565cee39e94d10a4eee4dd3153b12b/books/${params.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setBook(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [params.id]);

  return (
    book && (
      <div>
        <Typography variant="h4" gutterBottom>
          Book Details
        </Typography>
        <br />
        <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
          {book?.image && (
            <Image
              src={book.image}
              alt="Book cover photo"
              height={233}
              width={350}
            />
          )}
          <Stack spacing={2} direction="column">
            <Stack spacing={2} direction="row">
              <Typography variant="h5" gutterBottom>
                {book.title}
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <Typography variant="h6" gutterBottom>
                {book.author}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </div>
    )
  );
}
