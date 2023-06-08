"use client";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <Stack
      className="header"
      position={"sticky"}
      padding={3}
      border={"1px"}
      sx={{ borderColor: "grey", backgroundColor: "#FBF8F2" }}
      direction={"row"}
    >
      <Stack className="header-container" width={"100%"} direction={"row"}>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Image
            src={"/assets/png/logo.png"}
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
          <Button onClick={() => router.push("/")} sx={{ fontweight: "800" }}>
            Home
          </Button>

          <Button onClick={() => router.push("/dashboard")}>Contest</Button>

          <Button onClick={() => router.push("/about")}>About</Button>

          <Image
            className="user"
            src={"/assets/svg/user.svg"}
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
