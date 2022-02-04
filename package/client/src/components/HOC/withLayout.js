import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import SideBar from "../../components/organisms/SideBar/SideBar";
import MusicPlayer from '../../components/molecules/MusicPlayer/MusicPlayer';
import Copyright from '../../components/atoms/Copyright/Copyright';
import NavBar from "../molecules/NavBar";
import MainContainer from "../../components/organisms/MainContainer";

export default function withLayout(WrappedComponent) {

    function WrapperComponent() {
        const mdTheme = createTheme({
            typography: {
                fontFamily: ["circular-std", "Roboto"].join(","),
                fontSize: 20,
            },
        });

        return (
            <>
                <ThemeProvider theme={mdTheme}>
                    <Box sx={{ display: "flex" }}>
                        <CssBaseline />
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
                        </Box>
                        <SideBar />
                        <WrappedComponent />
                    </Box>
                </ThemeProvider>
                <MusicPlayer />
                <Copyright />
            </>
        );
    }
    return WrapperComponent;

}



// const mdTheme = createTheme({
//     typography: {
//         fontFamily: ["circular-std", "Roboto"].join(","),
//         fontSize: 20,
//     },
// });

// function Home() {
//     const { isAuthenticated, isEditing, currentUser } = useSelector(authSelector);

//     if (!isAuthenticated) {
//         return <Navigate to={ROUTES.SIGN_IN} />;
//     }

//     return (
//         <ThemeProvider theme={mdTheme}>
//             <Box sx={{ display: "flex" }}>
//                 <CssBaseline />
//                 <SideBar />
//                 <MainContainer />
//             </Box>
//         </ThemeProvider>

//     );
// }
// export default Home;
