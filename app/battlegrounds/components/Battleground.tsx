"use client";
import { Stack } from "@mui/material";
import CodeEditor from "./CodeEditor";
import Sidebar from "./Sidebar";
import QuestionBox from "./QuestionBox";
import React from "react";
import SinglePage from "@layout/SinglePage";
import Timer from "./Timer";
import useEndTime from "battlegrounds/hooks/useEndTime";
import EndModal from "./EndModal";

export default function Battlegrounds() {
  const [active] = useEndTime((state: any) => [state.active]);

  return (
    <Stack direction={"row"} position={"relative"}>
      {active && <EndModal />}
      <Sidebar />
      <Stack minWidth={"21rem"}></Stack>
      <SinglePage>
        <Stack
          className="qna-outer"
          direction={"column"}
          position={"relative"}
          gap={10}
          marginY={8}
          marginTop={"10vh"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          <Timer></Timer>

          <QuestionBox />
          <CodeEditor />
        </Stack>
      </SinglePage>
    </Stack>
  );
}
