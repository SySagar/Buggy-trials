"use client";
import Footer from "layout/Footer";
import Header from "layout/Header";
import "../globals.css";
import { Stack } from "@mui/material";
import ScrollToTop from "common/ScrollToTop";
import AppTheme from "theme/appTheme";
import createEmotionCache from "../lib/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Toaster } from "react-hot-toast";

const clientSideEmotionCache = createEmotionCache();

export default function SharedLayout({
  children,
  emotionCache = clientSideEmotionCache,
}: {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}) {
  return (
    <html lang="en">
      <CacheProvider value={emotionCache}>
        <AppTheme>
          <body>
            <Toaster position="top-center"></Toaster>
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
      </CacheProvider>
    </html>
  );
}
