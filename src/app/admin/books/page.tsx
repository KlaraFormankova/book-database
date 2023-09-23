import Link from "next/link";

import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { IBook } from "../../types/global";

export default function Page() {
    const books: IBook[] = [
        { id: 1, title: "Book 1", author: "Author 1" },
        { id: 2, title: "Book 2", author: "Author 2" },
        { id: 3, title: "Book 3", author: "Author 3" },
    ];

    return (
        <div>
            <Typography variant="h2" gutterBottom>
                Books
                <Link href="/admin/books/new"> <AddCircleOutlineIcon /> </Link>
            </Typography>
            <br />
            <br />
            <Grid container spacing={2}>
                {books.map((book) => (
                    <Grid key={book.id} item xs={6} md={4} lg={3}>
                        <BookPaper book={book}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}


function BookPaper(props: { book: IBook }) {
    return (
        <Link href={`/admin/books/${props.book.id}`}>
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

