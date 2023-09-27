"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import BackToBooksBtn from "@/app/components/back-to-books-btn";
import useBook from "@/app/hooks/use-book";

export default function Page({ params }: { params: { id: string } }) {
  const { book, setBook } = useBook(params.id);

  return (
    book && (
      <div>
        <div className="flex justify-end mb-3">
          <BackToBooksBtn />
        </div>
        <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
          {book?.image && (
            <Image
              src={book.image}
              alt="Book cover photo"
              height={240}
              width={300}
              className="max-h-96"
            />
          )}
          <Stack spacing={2} direction="column">
            <Stack spacing={2} direction="row">
              <Typography variant="h4" className="-mb-1.5 " gutterBottom>
                {book.title}
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <Typography variant="overline" gutterBottom>
                {book.author}
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <Typography variant="subtitle2" gutterBottom>
                {book.language}
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <Typography variant="subtitle2" gutterBottom>
                {book.pages} pages
              </Typography>
            </Stack>
            {book.desc && (
              <Stack spacing={2} direction="row">
                <Typography variant="body2" gutterBottom>
                  {book.desc}
                </Typography>
              </Stack>
            )}
          </Stack>
        </Stack>
      </div>
    )
  );
}
