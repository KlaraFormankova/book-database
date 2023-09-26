import { CloudUpload } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

export default function UploadImgBox(props: { imageUpload: (e: any) => void }) {
  return (
    <Box
      component="span"
      minWidth={200}
      className="p-0"
      sx={{ p: 2, border: "1px dashed grey" }}
    >
      <Button
        component="label"
        startIcon={<CloudUpload />}
        className="w-full h-full p-2"
      >
        Upload image
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={props.imageUpload}
        />
      </Button>
    </Box>
  );
}
