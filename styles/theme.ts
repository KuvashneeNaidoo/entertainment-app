"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h1: {
      color: "#FFFFFF",
      fontSize: "2rem",
      fontWeight: 200,
      marginLeft: "1rem",
    },
  },
});

export default theme;
