import { Button } from "@mui/material";
import Image from "next/image";
import { CloudUpload, Delete } from "@mui/icons-material";

export default function BookCoverImg(props: {
  image: string;
  setImage: (image: string) => void;
  imageChange: (e: any) => void;
}) {
  return (
    <div>
      <Image
        src={props.image}
        alt="Book cover photo"
        height={233}
        width={350}
      />
      <Button
        component="label"
        variant="outlined"
        startIcon={<CloudUpload />}
        className="m-2"
      >
        Update image
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={props.imageChange}
        />
      </Button>
      <Button
        variant="outlined"
        type="button"
        onClick={() => props.setImage("")}
        className="m-2"
        startIcon={<Delete />}
      >
        Delete image
      </Button>
    </div>
  );
}
