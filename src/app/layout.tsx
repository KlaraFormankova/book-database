import { AppBar, Box, Typography } from "@mui/material";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book database",
  description: "A database of books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ flexGrow: 1 }} className="app-bar">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="text-center p-2 font-mono"
          >
            Book database
          </Typography>
        </Box>
        <div className="p-3">{children}</div>
      </body>
    </html>
  );
}
