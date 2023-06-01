'use client'
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <Stack
      className="header"
      position={"sticky"}
      padding={3}
      border={"1px"}
      sx={{ borderColor: "grey", backgroundColor: " #e0e0eb" }}
      direction={"row"}
    >
      <Stack className="header-container" width={"100%"} direction={"row"}>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Image
            src={'/assets/png/logo.png'}
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <Typography fontWeight={700}>BUGGY-TRIALS</Typography>
        </Stack>

        <Stack flexGrow={1}></Stack>

        <Stack
          className="header-links"
          gap={2}
          direction={"row"}
          alignItems={"center"}
        >
          <Button sx={{fontweight:'800'}}>Home</Button>

          <Button>Contest</Button>

          <Button>About</Button>

          <Image
            className="user"
            src={'/assets/svg/user.svg'}
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
