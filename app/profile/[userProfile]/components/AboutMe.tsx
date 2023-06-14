import { Stack, Typography } from "@mui/material";
import React from "react";

export default function AboutMe() {
  return (
    <Stack>
      <Typography
        variant="subtitle2"
        sx={{ wordWrap: "break-word", textOverflow: "ellipsis" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur id
        deleniti quibusdam ipsam tenetur, a facilis ipsum corrupti labore vero
        natus eos iure nulla earum dolore modi ipsa tempore aspernatur!
      </Typography>
    </Stack>
  );
}
