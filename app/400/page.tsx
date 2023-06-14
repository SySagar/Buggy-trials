"use client";
import SharedLayout from "@layout/SharedLayout";
import { Stack, Typography } from "@mui/material";
import React from "react";
import MotionWrapper from "common/MotionWrapper";

export default function BadReqs() {
  return (
    <SharedLayout>
      <MotionWrapper>
        <Stack justifyContent={"flex-start"} direction={"row"}>
          <Stack border={5}></Stack>
          <Typography variant="h2" padding={2}>
            400 : This user does not exist
          </Typography>
        </Stack>
      </MotionWrapper>
    </SharedLayout>
  );
}
