"use client";
import React from "react";
import Dashboard from "./components/Dashboard";
import { Stack } from "@mui/material";
import SinglePage from "@layout/SinglePage";

export default function page() {
  return (
    <SinglePage>
      <Stack justifyContent={"center"} alignItems={"center"} padding={3}>
        <Stack minWidth={"600px"}>
          <Dashboard />
        </Stack>
      </Stack>
    </SinglePage>
  );
}
