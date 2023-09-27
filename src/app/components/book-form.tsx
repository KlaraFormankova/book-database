"use client";

import { Button, Stack, TextField } from "@mui/material";
import { IBook } from "../types/global";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Cancel, Save } from "@mui/icons-material";
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
  const [language, setLanguage] = useState<string>(
    props.originalBook ? props.originalBook.language : ""
  );
  const [pages, setPages] = useState<number>(
    props.originalBook ? props.originalBook.pages : 0
  );
  const [image, setImage] = useState<string>(
    props.originalBook && props.originalBook.image
      ? props.originalBook.image
      : ""
  );
  const [desc, setDesc] = useState<string>(
    props.originalBook && props.originalBook.desc ? props.originalBook.desc : ""
  );

  useEffect(() => {
    if (!props.originalBook) return;

    setTitle(props.originalBook.title);
    setAuthor(props.originalBook.author);
    setLanguage(props.originalBook.language);
    setPages(props.originalBook.pages);
    if (props.originalBook.image) {
      setImage(props.originalBook.image);
    }
    if (props.originalBook.desc) {
      setDesc(props.originalBook.desc);
    }
  }, [props.originalBook]);

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
      language,
      pages,
      image,
      desc,
    };

    props.onUpdateBook(book);
    clearForm();
  };

  const cancel = () => {
    if (props.originalBook) {
      setOriginalBook();
    } else {
      clearForm();
    }
  };

  const setOriginalBook = () => {
    if (props.originalBook) {
      setTitle(props.originalBook.title);
      setAuthor(props.originalBook.author);
      setLanguage(props.originalBook.language);
      setPages(props.originalBook.pages);
      if (props.originalBook.image) {
        setImage(props.originalBook.image);
      }
      if (props.originalBook.desc) {
        setDesc(props.originalBook.desc);
      }
    }
  };

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setLanguage("");
    setPages(0);
    setImage("");
    setDesc("");
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
        <Stack
          spacing={2}
          direction="column"
          className="w-full max-w-sm flex align"
        >
          <div>
            <TextField
              label="Title"
              className="w-full"
              required
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              value={title}
              onChange={(title) => setTitle(title.target.value ?? "")}
            />
            <TextField
              label="Author"
              className="w-full"
              required
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              value={author}
              onChange={(author) => setAuthor(author.target.value ?? "")}
            />
            <TextField
              label="Language"
              className="w-full"
              required
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              value={language}
              onChange={(language) => setLanguage(language.target.value ?? "")}
            />
            <TextField
              label="Pages"
              className="w-full"
              required
              variant="outlined"
              type="number"
              sx={{ mb: 3 }}
              value={pages}
              onChange={(pages) => setPages(parseInt(pages.target.value))}
            />
            <TextField
              label="Description"
              className="w-full"
              required
              multiline
              maxRows={5}
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              value={desc}
              onChange={(desc) => setDesc(desc.target.value ?? "")}
            />
          </div>
          <Stack spacing={2} direction="row" className="justify-end">
            <Button
              variant="outlined"
              type="button"
              startIcon={<Cancel />}
              onClick={cancel}
            >
              Cancel
            </Button>
            <Button variant="outlined" type="submit" startIcon={<Save />}>
              Save
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </form>
  );
}
