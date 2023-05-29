import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import useSignUpStore from "../hooks/useSignupStore";

export default function Singup() {
  const [steps, activeStep, setActiveStep] = useSignUpStore((state) => [
    state.steps,
    state.activeStep,
    state.setActiveStep,
  ]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper alternativeLabel>
        {steps.map((step, idx) => (
          <Step
            key={step.label}
            completed={activeStep > idx}
            active={activeStep === idx}
          >
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
