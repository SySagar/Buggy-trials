import { Button, Menu, MenuItem, Stack } from "@mui/material";
import React from "react";
import Editor from "@monaco-editor/react";
import editorStyles from "../battlegrounds.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";

export default function CodeEditor() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        className={editorStyles.editor_inner_container}
        minWidth={"1000px"}
        position={"relative"}
      >
        <Stack alignItems={"end"}>
          <Stack className={editorStyles.options} direction={"row"}>
            <Button>
              <SettingsIcon />
            </Button>

            <Button
              id="basic-button"
              variant="outlined"
              sx={{ maxWidth: "150px" }}
              endIcon={<KeyboardArrowDownIcon />}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              C++
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Java</MenuItem>
              <MenuItem onClick={handleClose}>Python</MenuItem>
              <MenuItem onClick={handleClose}>C</MenuItem>
            </Menu>
          </Stack>
        </Stack>

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
