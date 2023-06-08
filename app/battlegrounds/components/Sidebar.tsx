import {
  Avatar,
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import sidebarStyles from "../battlegrounds.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import playerStyles from "../battlegrounds.module.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack
      position={"fixed"}
      top={"10vh"}
      left={0}
      bottom={0}
      className={sidebarStyles.sidebar}
      padding={3}
      direction={"column"}
      minWidth={"20rem"}
    >
      <Stack height={"85%"} gap={4}>
        <Typography variant="h5">Players:</Typography>

        <Box className={playerStyles.players} gap={3}>
          <Stack alignItems={"center"}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{ width: "fit-content" }}
            >
              <Avatar
                sx={{
                  width: "60px",
                  height: "60px",
                  boxShadow: "0px 0px 4px 2px #fff",
                }}
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              />
            </StyledBadge>

            <Typography variant="caption">Samuele</Typography>
          </Stack>

          <Stack alignItems={"center"}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{ width: "fit-content" }}
            >
              <Avatar
                sx={{
                  width: "60px",
                  height: "60px",
                  boxShadow: "0px 0px 4px 2px #fff",
                }}
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              />
            </StyledBadge>

            <Typography variant="caption">Lara</Typography>
          </Stack>
        </Box>

        <Stack paddingY={"15px"} gap={2}>
          <Tooltip title="bugs solved" arrow sx={{ cursor: "pointer" }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              border={2}
              borderRadius={"20px"}
              paddingY={1}
              paddingX={3}
              width={"fit-content"}
            >
              <Typography variant="h4">7</Typography>
              <Avatar
                sx={{ width: "60px", height: "60px" }}
                src="/assets/png/bugkill.png"
              ></Avatar>
            </Stack>
          </Tooltip>
          <br />

          <Tooltip title="score" arrow sx={{ cursor: "pointer" }}>
            <Stack
              alignItems={"center"}
              direction={"row"}
              border={2}
              borderRadius={"20px"}
              paddingY={1}
              paddingX={3}
              width={"fit-content"}
            >
              <Typography variant="h4">70</Typography>
              <SportsScoreIcon sx={{ width: "60px", height: "60px" }} />
            </Stack>
          </Tooltip>
        </Stack>
      </Stack>

      <Stack paddingY={5} alignItems={"center"}>
        <Button
          variant="contained"
          sx={{ maxWidth: "160px" }}
          endIcon={<ArrowForwardIcon />}
        >
          Execute
        </Button>
      </Stack>

      <Stack>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab
            icon={
              <Avatar
                sx={{ objectFit: "fill", width: "30px", height: "30px" }}
                alt="test avatar"
                src="./assets/png/copilot.png"
              />
            }
            label=""
          />
          <Tab
            icon={
              <Avatar
                sx={{ objectFit: "fill", width: "30px", height: "30px" }}
                alt="test avatar"
                src="./assets/png/git.png"
              />
            }
            label=""
          />
        </Tabs>
      </Stack>
    </Stack>
  );
}
