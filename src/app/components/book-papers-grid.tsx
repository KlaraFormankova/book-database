import { Grid, Paper, Typography } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


import Link from "next/link";
import { IBook } from "../types/global";

export default function BookPapersGrid(props: { books: IBook[], isAdmin?: boolean }) {
    return (
        <div>
            <Typography variant="h2" gutterBottom>
                Books
                {props.isAdmin && (
                    <Link href="/admin/books/new">
                        <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
                    </Link>
                )}
            </Typography>
            <br />
            <br />
            <Grid container spacing={2}>
                {props.books.map((book) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                        <BookPaper book={book} isAdmin={props.isAdmin} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

function BookPaper(props: { book: IBook, isAdmin?: boolean }) {
    return (
        <Link href={props.isAdmin ? `/admin/books/${props.book.id}` : `/books/${props.book.id}`}>
            <Paper elevation={3}>
                <Typography variant="h5" gutterBottom>
                    {props.book.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {props.book.author}
                </Typography>
            </Paper>
        </Link>
    );
}