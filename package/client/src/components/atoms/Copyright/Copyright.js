import Typography from "@mui/material/Typography";

function Copyright(props) {
    return (
      <Typography variant="body2" color="white" align="center" {...props}>
        {"Copyright © "}
        {"Made with ❤ by Pearls"} {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  export default Copyright;