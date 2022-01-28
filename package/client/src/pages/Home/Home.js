import * as React from "react";
import { authSelector } from "../../redux/auth/auth-selectors";

// Material UI 
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

// Components
import NavBar from "../../components/molecules/NavBar";
import SideBar from "../../components/organisms/SideBar/SideBar";
import InnerDash from "../../components/organisms/InnerDash";
import Copyright from "../../components/atoms/Copyright";

// const { isAuthenticated, currentUser } = useSelector(authSelector);

const mdTheme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Mochiy Pop P One"].join(","),
  },
});

function Home() {
  return (
    <>
    {/* <main className="p-4">
      <section className="p-4">
        {isAuthenticated ? (
          <h1 className="text-xl">Hello {currentUser.email}</h1>
        ) : (
          <h1 className="text-xl">Hello World</h1>
        )}
      </section>
    </main> */}
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
</>
  );
}
export default Home;
