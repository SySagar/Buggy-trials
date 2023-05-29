"use client";
import Footer from "layout/Footer";
import Header from "layout/Header";
import "./globals.css";
import { Stack } from "@mui/material";
import ScrollToTop from "common/ScrollToTop";
import AppTheme from "theme/appTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppTheme>
        <body>
          <Stack minHeight={"100vh"}>
            <Header />
            <Stack flexGrow={1}>
              <ScrollToTop />
              {children}
            </Stack>
            <Footer />
          </Stack>
        </body>
      </AppTheme>
    </html>
  );
}
