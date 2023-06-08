"use client";
import { Stack, Typography } from "@mui/material";
import ScrollToTop from "common/ScrollToTop";
import AppTheme from "theme/appTheme";
import Image from "next/image";

export default function BattleGroundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppTheme>
        <body>
          <Stack
            direction={"row"}
            position={"fixed"}
            alignItems={"center"}
            gap={1}
            height={"10vh"}
            zIndex={2}
            width={"100%"}
            paddingX={4}
            sx={{ background: "#FBF8F2" }}
          >
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <Image
                src={"/assets/png/logo.png"}
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <Typography fontWeight={700}>BUGGY-TRIALS</Typography>
            </Stack>
          </Stack>
          <Stack minHeight={"100vh"}>
            <Stack flexGrow={1}>
              <ScrollToTop />
              {children}
            </Stack>
          </Stack>
        </body>
      </AppTheme>
    </html>
  );
}
