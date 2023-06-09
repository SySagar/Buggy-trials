"use client";
import { Stack } from "@mui/material";
import CodeEditor from "./CodeEditor";
import Sidebar from "./Sidebar";
import QuestionBox from "./QuestionBox";
import React from "react";
import SinglePage from "@layout/SinglePage";
import Timer from "./Timer";
import useEndTime from "../hooks/useEndTime";
import EndModal from "./EndModal";

export default function Battlegrounds() {
  const [active] = useEndTime((state: any) => [state.active]);

  return (
    <Stack direction={"row"} position={"relative"}>
      {active && <EndModal />}
      <Sidebar />
      <Stack minWidth={"21rem"}></Stack>
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
        width={"100%"}
      >
        <Timer></Timer>
        <SinglePage>
          <Stack gap={10}>
            <QuestionBox />
            <CodeEditor />
          </Stack>
        </SinglePage>
      </Stack>
    </Stack>
  );
}
