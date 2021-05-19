import React from "react";
import MainNavBar from "./MainNavBar/MainNavBar";
import MainTable from "./MainTable/MainTable";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#169B71",
    },
    secondary: {
      light: "#0000008a",
      main: "#000000",
      dark: "#777777",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function DashContainer({ currentId, setCurrentId }) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "relative", marginTop: "68px" }}>
        {/* <MainNavBar /> */}
        <MainTable currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </ThemeProvider>
  );
}

export default DashContainer;
