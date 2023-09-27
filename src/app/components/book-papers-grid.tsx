import { Grid } from "@mui/material";
import { IBook } from "../types/global";
import BookPaper from "./book-paper";

export default function BookPapersGrid(props: {
  books: IBook[];
  isAdmin?: boolean;
}) {
  return (
    <Grid container spacing={2}>
      {props.books.map((book) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={book._id}>
          <BookPaper book={book} isAdmin={props.isAdmin} />
        </Grid>
      ))}
    </Grid>
  );
}
