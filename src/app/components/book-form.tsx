import { Button, Stack, TextField } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { IBook } from "../types/global";

export default function BookForm(props: {
    book: IBook;
    title: string;
    author: string;
    isEditing: boolean;
    setIsEditing: (isEditing: boolean) => void;
    onUpdateBook: (updatedBook: IBook) => void;
    onDeleteBook: () => void;
}) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onUpdateBook({
            id: props.book.id,
            title: props.title,
            author: props.author,
        });
    };

    const handleDelete = () => {
        props.onDeleteBook();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="column">
                <TextField 
                    label="Title"
                    required
                    variant='outlined'
                    type='text'
                    sx={{mb: 3}}
                    value={props.title}
                />
                <TextField
                    label="Author"
                    required
                    variant='outlined'
                    type='text'
                    sx={{mb: 3}}
                    value={props.author}
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
