'use client';

import BookForm from "@/app/components/book-form";
import { IBook } from "@/app/types/global";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
    const [book, setBook] = useState<IBook | null>(null);
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleUpdateBook = (updatedBook: IBook) => {
        setBook(updatedBook);
        setTitle(updatedBook.title);
        setAuthor(updatedBook.author);
        setIsEditing(false);
    }

    const handleDeleteBook = () => {
        setBook(null);
    }

    useEffect(() => {
        const book: IBook = {
            id: 1,
            title: "Book 1",
            author: "Author 1"
        };
        setBook(book);
        setTitle(book.title);
        setAuthor(book.author);
    }, []);
        
    return (
        <div>
            <br />
            {book ? (
                <BookForm
                    book={book}
                    title={title}
                    author={author}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    onUpdateBook={handleUpdateBook}
                    onDeleteBook={handleDeleteBook}
                />
            ) : (
                <p>Book not found</p>
            )}
        </div>
    );
}