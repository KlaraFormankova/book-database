import Link from "next/link";

import React from 'react';
import Typography from '@mui/material/Typography';

import { IBook } from "../types/global";
import BookPapersGrid from "../components/book-papers-grid";

export default function Page() {
    const books: IBook[] = [
        { id: 1, title: "Book 1", author: "Author 1" },
        { id: 2, title: "Book 2", author: "Author 2" },
        { id: 3, title: "Book 3", author: "Author 3" },
    ];

    return (
        <BookPapersGrid books={books} />
    )
}
