/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { APIMethods } from "@lib/axios/api";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import profileStyles from "../profile.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";
import AboutMe from "./AboutMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Upload } from "@mui/icons-material";

interface profileTypes {
  username: string;
}

export default function Profile() {
  const router = useRouter();
  const [skills, setSkills] = useState<string[]>([
    "React",
    "Next",
    "Firebase",
    "Tailwind",
    "wsl",
    "Mongodb",
    "AWS",
    "Google Cloud",
    "Linux",
  ]);
  const username = usePathname().split("/")[2];
  useEffect(() => {
    console.log(username);

    try {
      const userProfileExist = async () => {
        return APIMethods.profile.profile({ username } as profileTypes);
      };
      // userProfileExist()
      //   .then((res) => {
      //     console.log(res.data.status);
      //     if (res.data.status === 200) {
      //       router.push(`/profile/${username}`);
      //     } else {
      //       router.push("/400");
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    } catch (err) {
      console.log(err);
    }
  }, [router, username]);

  const [checked, setChecked] = useState(true);
  const [userImage, setUserImage] = useState<string>("");
  const [userPoster, setPoster] = useState<string>(
    "https://images.unsplash.com/photo-1686135161698-4c14ef460a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  );

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      // setUserImage(e.target.files[0]);
      setUserImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePosterChange = (e: any) => {
    if (e.target.files[0]) {
      // setUserImage(e.target.files[0]);
      setPoster(URL.createObjectURL(e.target.files[0]));
      console.log(userPoster);
    }
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Stack sx={{ background: "#FFF" }} borderRadius={3}>
      <Stack position={"relative"}>
        <Box position={"relative"}>
          <Avatar
            className={profileStyles.bgImage}
            src={userPoster}
            alt={"background"}
          />

          <IconButton
            component="label"
            disableRipple
            sx={{ position: "absolute", right: "10px", top: "10px" }}
          >
            <input
              hidden
              accept=".jpg,.png,.jpeg"
              type="file"
              onChange={handlePosterChange}
            />
            <EditIcon />
          </IconButton>
        </Box>

        <Stack position={"relative"} direction={"row"}>
          <Box position={"relative"} bottom={72} left={25}>
            <Stack
              height="100%"
              width="100%"
              justifyContent="center"
              alignItems="center"
              sx={{
                "&:hover": {
                  "& .MuiAvatar-root": {
                    filter: "brightness(0.8)",
                  },
                  "& .MuiIconButton-root": {
                    opacity: 1,
                  },
                },
                height: "fit-content",
              }}
            >
              <Avatar
                sx={{ width: 120, height: 120, border: 5, color: "#fff" }}
                alt={"name"}
                src={userImage}
                placeholder={"/assets/png/anonymous.png"}
              />
              <IconButton
                component="label"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  position: "absolute",
                  opacity: 0,
                  transition: "opacity 300ms",
                  backgroundColor: "background.paper",
                }}
                color="primary"
              >
                <input
                  hidden
                  accept=".jpg,.png,.jpeg"
                  type="file"
                  onChange={handleImageChange}
                />
                <Upload />
              </IconButton>
            </Stack>
          </Box>

          <Stack flexGrow={1}></Stack>

          <Box paddingTop={1} paddingRight={2}>
            <MoreVertIcon />
          </Box>
        </Stack>
        <Stack position={"relative"} bottom={70} paddingLeft={5} gap={1}>
          <Typography variant="h6">Amanda</Typography>

          <Typography variant="subtitle1">
            Full Stack developer | Competetive Programmer | Open Source
            Enthusiast
          </Typography>

          <Typography variant="subtitle2">
            🇮🇳.Bhubaneshwar, Odisha, India.
          </Typography>

          <Button sx={{ width: "100px", marginTop: "5px" }} variant="contained">
            connect
          </Button>

          <Stack
            width={"fit-content"}
            alignItems={"center"}
            direction={"row"}
            marginTop={2}
          >
            <Typography variant="subtitle1" color={"#3366ff"} fontWeight={600}>
              About me
            </Typography>
            <IconButton onClick={handleChange}>
              {checked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Stack>
          <Stack maxWidth={"700px"}>
            <Collapse in={checked}>
              <AboutMe />
            </Collapse>
          </Stack>

          <Stack marginTop={2} maxWidth={"600px"}>
            <Typography variant="subtitle1" color={"#3366ff"} fontWeight={600}>
              Skills
            </Typography>
            <Stack
              direction={"row"}
              gap={1}
              paddingY={2}
              display={"flex"}
              flexWrap={"wrap"}
            >
              {skills.map((skill) => (
                <Chip label={skill} key={skill} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
