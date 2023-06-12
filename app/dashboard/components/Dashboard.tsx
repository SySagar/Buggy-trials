import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { userSchema } from "dashboard/models/userSchema";
import useUserJoin from "dashboard/hooks/useUserJoin";

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    white: true;
  }
}

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useUserJoin((state) => [state.user, state.setUser]);

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e: any) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    formik.values.roomID = id;
    toast.success("Created a new room", {
      style: {
        padding: '16px',
        color: '#0D0D0D',
      },
      iconTheme: {
        primary: 'green',
        secondary: '#FFFAEE',
      },
    });
  };

  const router = useRouter();
  const joinRoom = () => {
    console.log(roomId);

    console.log(username);

    if (!user) {
      toast.error("ROOM ID & username is required");
      return;
    }

    console.log("step 2 done");
    router.push(`/battlegrounds/${roomId}`);
  };

  const handleInputEnter = (e: any) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  const formik = useFormik({
    initialValues: {
      roomID: user!.roomdID,
      username: user!.username,
    },
    onSubmit: async (values) => {
      const { roomID, username } = values;
      setUser({
        roomID,
        username,
      });
      // setIsLoading(true);
      joinRoom();
    },
    validationSchema: toFormikValidationSchema(userSchema),
  });

  return (
    <Stack
      border="1px solid"
      borderColor="divider"
      borderRadius="8px"
      padding="24px"
      gap="24px"
    >
      <Typography variant="h3">Join a code arena!</Typography>
      <Stack gap="16px">
        <TextField
          name="roomID"
          label="roomID"
          value={roomId ? roomId : formik.values.roomID}
          onChange={formik.handleChange}
          onKeyUp={handleInputEnter}
          onBlur={formik.handleBlur}
          error={formik.touched.roomID && formik.errors.roomID ? true : false}
          helperText={formik.errors.roomID}
          required
        />
        <TextField
          label="username"
          name="username"
          value={username ? username : formik.values.username}
          onChange={formik.handleChange}
          onKeyUp={handleInputEnter}
          onBlur={formik.handleBlur}
          error={
            formik.touched.username && formik.errors.username ? true : false
          }
          helperText={formik.errors.username}
          required
        />
      </Stack>
      <Button
        variant="contained"
        fullWidth
        disabled={isLoading}
        onClick={() => formik.handleSubmit()}
      >
        {isLoading ? <CircularProgress color="white" size={25} /> : "Join"}
      </Button>

      <Stack alignItems={"center"}>
        <Typography>
          Don&apos;t have a room? Create one{" "}
          <a href="" onClick={createNewRoom}>
            here
          </a>
        </Typography>
      </Stack>
    </Stack>
  );
}
