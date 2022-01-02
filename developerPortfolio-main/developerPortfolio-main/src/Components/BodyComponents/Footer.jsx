import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";
import { LinkedIn, GitHub, Code } from "@material-ui/icons";

export default function Footer() {
  const classes = useStyles();
  var date = new Date();
  return (
    <Box className={classes.footerContainer} id="Footer">
      <IconButton
        className={classes.iconButton}
        to="Headder"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
        component={Link}
      >
        <ArrowUpwardIcon />
      </IconButton>
      {/* <Typography variant="body1" component="h4" align="right" color="inherit">
        Developed and designed by Aditya, All Right Reserved ©{" "}
        {date.getFullYear()}
      </Typography> */}
      <Typography variant="body1" component="h4" align="left" color="inherit">
        Do something each day to bring you a little closer to your dreams.
      </Typography>
      <div align="left" style={{ flexDirection: "column" }}>
        <LinkedIn
          className={classes.icons}
          onClick={() =>
            window.open("https://linkedin.com/in/adityasrprakash", "_blank")
          }
        />
        <GitHub
          className={classes.icons}
          onClick={() => window.open("https://github.com/adip-45", "_blank")}
        />
        <Code
          className={classes.icons}
          onClick={() =>
            window.open("https://leetcode.com/adityaprakashs/", "_blank")
          }
        />
      </div>
    </Box>
  );
}
