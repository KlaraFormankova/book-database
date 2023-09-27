import Link from "next/link";
import { IBook } from "../types/global";
import { Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function BookPaper(props: { book: IBook; isAdmin?: boolean }) {
  const link = props.isAdmin
    ? `/admin/books/${props.book._id}`
    : `/books/${props.book._id}`;

  return (
    <Link href={link}>
      <Paper elevation={3} className="h-36 overflow-hidden flex align">
        <Stack spacing={1} direction="row" className="h-36 w-full">
          {props.book.image && (
            <Image
              src={props.book.image}
              alt="Book cover photo"
              width={100}
              height={144}
              className="max-h-36"
            />
          )}
          <Stack
            direction="column"
            className="padding-2-i h-36 overflow-hidden w-full"
          >
            <div className="h-full">
              <Typography
                variant="h5"
                className="-mb-1.5 overflow-hidden whitespace-nowrap text-ellipsis"
                gutterBottom
              >
                {props.book.title}
              </Typography>
              <Typography variant="overline" className="ml-2" gutterBottom>
                {props.book.author}
              </Typography>
            </div>
            <Stack direction="row" className="justify-between justify-self-end">
              <Typography variant="body2">{props.book.language}</Typography>
              <Typography variant="body2">{props.book.pages} pages</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Link>
  );
}
