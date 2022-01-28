import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import NavBar from "../../components/molecules/NavBar";
import SideBar from "../../components/organisms/SideBar/SideBar";
import InnerDash from "../../components/organisms/InnerDash";
import Copyright from "../../components/atoms/Copyright";

const mdTheme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Mochiy Pop P One"].join(","),
  },
});

function Home() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
       
        <SideBar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
           <NavBar />
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <InnerDash />
          </Container>
          <Copyright sx={{ pt: 4, mt: 3 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;

