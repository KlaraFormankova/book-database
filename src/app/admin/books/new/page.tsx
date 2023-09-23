'use client';

import { IBook, INewBook } from '@/app/types/global';
import { Button, Stack, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React, { useState } from 'react';

export default function Page() {
	const [books, setBooks] = useState<IBook[]>([]);
	const [nextId, setNextId] = useState<number>(1);

	const handleCreateBook = (newBook: INewBook) => {
		const book: IBook = {
			id: nextId,
			title: newBook.title,
			author: newBook.author
		};
		setNextId((nextId) => nextId + 1);
		setBooks((books) => [...books, book]);
	}

    return (
		<BookForm onSubmit={handleCreateBook} />
    );
}

type BookFormProps = {
  onSubmit: (newBook: INewBook) => void;
};

function BookForm({ onSubmit }: BookFormProps) {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
		<Typography variant="h2" gutterBottom>
			Create a New Book
		</Typography>
		<Stack spacing={2} direction="column">
			<TextField 
				label="Title"
				onChange={(e) => setTitle(e.target.value)}
				required
				variant='outlined'
				type='text'
				sx={{mb: 3}}
				value={title}
			/>
			<TextField
				label="Author"
				onChange={(e) => setAuthor(e.target.value)}
				required
				variant='outlined'
				type='text'
				sx={{mb: 3}}
				value={author}
			/>
			<Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
				Upload cover image
				<input type="file" hidden />
			</Button>
			<Button variant="outlined" type='submit'>Submit</Button>
		</Stack>
    </form>
  );
}

