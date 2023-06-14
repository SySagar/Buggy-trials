"use client";
import React from "react";
import Profile from "./components/Profile";
import { Stack } from "@mui/material";
import SinglePage from "@layout/SinglePage";

export default function page() {
  return (
    <SinglePage>
      <Stack justifyContent={"center"} alignItems={"center"} padding={3}>
        <Stack minWidth={"800px"}>
          <Profile />
        </Stack>
      </Stack>
    </SinglePage>
  );
}
