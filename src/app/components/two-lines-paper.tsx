import { Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function TwoLinesPaper(props: {
  link: string;
  firstLine: string;
  secondLine: string;
  image?: string;
}) {
  return (
    <Link href={props.link}>
      <Paper elevation={3} className="h-20 overflow-hidden">
        <Stack spacing={1} direction="row">
          {props.image && (
            <Image
              src={props.image}
              alt="Book cover photo"
              width={60}
              height={80}
            />
          )}
          <div className="m-2">
            <Stack spacing={1} direction="column" className="m-2">
              <Typography variant="h5" gutterBottom>
                {props.firstLine}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {props.secondLine}
              </Typography>
            </Stack>
          </div>
        </Stack>
      </Paper>
    </Link>
  );
}
