import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import MotionWrapper from "./MotionWrapper";

export default function NextSteps() {
  return (
    <MotionWrapper>
      <Stack
        border="1px solid"
        borderColor="divider"
        borderRadius="8px"
        padding="24px"
        gap="24px"
      >
        <Typography variant="overline">What&#39;s next?</Typography>
        <Typography variant="h3">Login to your account</Typography>
        <Stack gap="16px">
          <Link href="/auth/login" passHref>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Link>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
}
