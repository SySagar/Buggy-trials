'use client'
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Stack
      className="footer"
      position={"sticky"}
      padding={3}
      sx={{ backgroundColor: "#FBF8F2" }}
    >
      <Stack
        className="footer-container"
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>
          Made with ❤️ by <Link href="https://github.com/SySagar">SySagar</Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
