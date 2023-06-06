"use client";
import { Stack } from "@mui/material";
import CodeEditor from "./CodeEditor";
import Sidebar from "./Sidebar";
import QuestionBox from "./QuestionBox";
import React from "react";
import SinglePage from "@layout/SinglePage";

export default function Battlegrounds() {
  return (
    <SinglePage>
      <Stack direction={"row"} >
        <Sidebar />
        <Stack
          className="qna-outer"
          direction={"column"}
          gap={10}
          padding={7}
          marginLeft={"20rem"}
          justifyContent={"center"}
          alignItems={"center"}
          flexGrow={1}
        >
          <QuestionBox />
          <CodeEditor />
        </Stack>
      </Stack>
    </SinglePage>
  );
}
