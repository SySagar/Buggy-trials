import { Button, Stack } from "@mui/material";
import React from "react";
import sidebarStyles from '../battlegrounds.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Sidebar() {
  return (
    <Stack
      position={"fixed"}
      top={0}
      left={0}
      bottom={0}
      className={sidebarStyles.sidebar}
      direction={"column"}
      minWidth={"20rem"}
    >
      <Stack></Stack>
      <Button variant="contained">
        Execute
        <ArrowForwardIosIcon />
      </Button>
    </Stack>
  );
}
