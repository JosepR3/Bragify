import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import SearchInput from '../../atoms/SearchInput/SearchInput';


import MainList  from "../../molecules/MainList";



function SideBar() {
  
    return (
      <Box
          sx={{
            color: "#E5FAF9",
            backgroundColor: "#2D2F2C",
            width: "260px",
          }}
        >
          <Toolbar sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: [1],
            }}>
          <img src="logo test.PNG" alt="logo" width="40" height="40" margin="20px"/>
          </Toolbar>
          <Toolbar 
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex',
              px: [1],
            }}>
            <SearchInput/>
          </Toolbar>
          <MainList/>
          <Divider />
        </Box>
    );
}

export default SideBar;