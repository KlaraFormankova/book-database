import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function BackToBooksBtn(props: { isAdmin?: boolean }) {
  const path = props.isAdmin ? "/admin/books" : "/books";
  return (
    <Button
      variant="outlined"
      className="h-fit"
      href={path}
      startIcon={<KeyboardArrowLeftIcon />}
    >
      Back to Books
    </Button>
  );
}
