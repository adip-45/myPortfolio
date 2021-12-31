import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import { Decorator } from "../common/commonComponent";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import { LinkedIn, GitHub, Code } from "@material-ui/icons";
import DrawerComponent from "./DrawerComponent";
import Typed from "react-typed";

export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Experience", Id: "Timeline" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "Contact", Id: "Contact" },
  ];

  return (
    <Box className={classes.HeardeWraper} id="Headder">
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier}>
        <Typography varinat="h3" component="h4" className={classes.headerTitle}>
          I'm a <span style={{ paddingRight: "5px" }}></span>
          <Typed
            strings={[
              " Software Developer,",
              " Web Developer,",
              " AI/ML enthusiast,",
            ]}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </Typography>
        <Typography varinat="h3" component="h4" className={classes.headerDesc}>
          {/* <br /> */}
          Welcome to my personal portfolio website!
        </Typography>

        <div style={{ flexDirection: "column" }}>
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

        {Decorator({
          label: "About Me",
          withIcon: true,
          Icon: <ArrowDownwardRoundedIcon />,
        })}
      </Box>
    </Box>
  );
}
