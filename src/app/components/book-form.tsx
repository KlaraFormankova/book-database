import { Button, Stack, TextField } from "@mui/material";
import { IBook } from "../types/global";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Save } from "@mui/icons-material";
import BookCoverImg from "./book-cover-img";
import UploadImgBox from "./upload-img-box";

export default function BookForm(props: {
  onUpdateBook: (updatedBook: IBook) => void;
  originalBook?: IBook;
}) {
  const [title, setTitle] = useState<string>(
    props.originalBook ? props.originalBook.title : ""
  );
  const [author, setAuthor] = useState<string>(
    props.originalBook ? props.originalBook.author : ""
  );
  const [image, setImage] = useState<string>(
    props.originalBook && props.originalBook.image
      ? props.originalBook.image
      : ""
  );

  useEffect(() => {
    if (!props.originalBook) return;
    setTitle(props.originalBook.title);
    setAuthor(props.originalBook.author);
    if (props.originalBook.image) {
      setImage(props.originalBook.image);
    }
  }, [props.originalBook]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result as string);
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const book: IBook = {
      title,
      author,
      image,
    };

    props.onUpdateBook(book);
    setTitle("");
    setAuthor("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
        {image && (
          <BookCoverImg
            image={image}
            setImage={setImage}
            imageChange={handleImageUpload}
          />
        )}
        {!image && <UploadImgBox imageUpload={handleImageUpload} />}
        <Stack spacing={2} direction="column" className="w-full max-w-sm">
          <TextField
            label="Title"
            required
            variant="outlined"
            type="text"
            sx={{ mb: 3 }}
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            label="Author"
            required
            variant="outlined"
            type="text"
            sx={{ mb: 3 }}
            value={author}
            onChange={handleAuthorChange}
          />
          <Button variant="outlined" type="submit" startIcon={<Save />}>
            Save
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
