import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    disabled: Palette["primary"];
  }

  interface PaletteOptions {
    white: PaletteOptions["primary"];
    disabled: Palette["primary"];
  }
}

const paletteOptions: PaletteOptions = {
  white: {
    main: "#CED4CE",
    light: "#CED4CE",
    dark: "#ffffff",
  },
  primary: {
    main: "#000000",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#ffffff",
    contrastText: "#000000",
  },
  disabled: {
    main: "#ccc",
    light: "#121212",
    dark: "#121212",
    contrastText: "#ccc",
  },
  text: {
    primary: "#000000",
    secondary: "#999",
  },
};

export default paletteOptions;
