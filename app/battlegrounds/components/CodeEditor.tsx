import { Stack } from "@mui/material";
import React from "react";
import Editor from "@monaco-editor/react";
import editorStyles from "../battlegrounds.module.css";

export default function CodeEditor() {
  return (
    <Stack direction={'column'} justifyContent={"center"} alignItems={"center"}>
      <Stack className="inner-container" minWidth={'1000px'}>

      <Editor
        theme="vs-dark"
        language="c"
        className={editorStyles.codeEditor}
        // value={content}
        // onChange={handleChange}
        />
        </Stack>
    </Stack>
  );
}
