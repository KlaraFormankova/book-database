import { Grid, Typography } from "@mui/material";

import { IBook } from "../types/global";
import TwoLinesPaper from "./two-lines-paper";

export default function BookPapersGrid(props: {
  books: IBook[];
  isAdmin?: boolean;
}) {
  return (
    <div>
      <br />
      <br />
      <Grid container spacing={2}>
        {props.isAdmin && (
          <Grid item xs={12} sm={6} md={4} lg={3} key={0}>
            <TwoLinesPaper
              link={`/admin/books/new`}
              firstLine="+"
              secondLine="Add New Book"
            />
          </Grid>
        )}
        {props.books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book._id}>
            <BookPaper book={book} isAdmin={props.isAdmin} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

function BookPaper(props: { book: IBook; isAdmin?: boolean }) {
  return (
    <TwoLinesPaper
      link={
        props.isAdmin
          ? `/admin/books/${props.book._id}`
          : `/books/${props.book._id}`
      }
      firstLine={props.book.title}
      secondLine={props.book.author}
      image={props.book.image ? props.book.image : undefined}
    />
  );
}
