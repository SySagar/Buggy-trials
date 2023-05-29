import { Box } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";

export default function ScrollToTop() {
  return (
    <Box
      position={"fixed"}
      right={50}
      bottom={50}
      sx={{
        borderRadius: "100%",
        padding: "4px",
        background: "black",
        width: "fit-content",
        height: "33px",
      }}
    >
      <Link href={"#"}>
        <ArrowUpwardIcon color="secondary" />
      </Link>
    </Box>
  );
}
