import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import  {mainListItems, secondaryListItems}  from "../../molecules/ListItems";

function SideBar() {

    return (
      <Box
          sx={{
            display: "flex",
            alignItems: "left",
            justifyContent: "flex-end",
            px: [1],
            backgroundColor: "#2D2F2C",
            width: "240px",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              bgcolor: "inherit",
            }}
          >
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Box>
    );
}

export default SideBar;