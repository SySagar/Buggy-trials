import {
  Alert,
  Button,
  CircularProgress,
  Collapse,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import { Check, Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import useSignUpStore from "../hooks/useSignupStore";
import MotionWrapper from "./MotionWrapper";

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    white: true;
  }
}

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [setActiveStep, setUser, user] = useSignUpStore((state) => [
    state.setActiveStep,
    state.setUser,
    state.user,
  ]);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: user!.email,
      password: user!.password,
      otp: "",
    },
    onSubmit: async (values) => {
      const { email, password } = values;
      setUser({
        email,
        password,
      });
      console.log("step 1 done");
      setActiveStep(1);
    },
    //validationSchema: validationSchema
  });

  const togglePasswordVisibility = () => {
    setShowPassword((v) => !v);
  };

  return (
    <MotionWrapper>
      <Stack
        border="1px solid"
        borderColor="divider"
        borderRadius="8px"
        padding="24px"
        gap="24px"
      >
        <Typography variant="h3">Get onboard!</Typography>
        <Collapse in={error ? true : false}>
          <Alert severity="error">{error}</Alert>
        </Collapse>
        <Stack gap="16px">
          <TextField
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.errors.email}
            required
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            helperText={formik.errors.password}
            required
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => togglePasswordVisibility()}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        </Stack>
        <Button
          variant="contained"
          fullWidth
          disabled={isLoading}
          onClick={() => formik.handleSubmit()}
        >
          {isLoading ? <CircularProgress color="white" size={25} /> : "Next"}
        </Button>
      </Stack>
    </MotionWrapper>
  );
}
