import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: "Software Development",
      description:
        "Developed intricate middleware applications for a British multinational universal bank and German multinational automotive client",
      icon: <DashboardIcon />,
    },
    {
      title: "LeetCode",
      description:
        "Practice Data Structures and Algorithms questions for Interview Preparation. Acceptance Rate: 76%",
      icon: <ToysIcon />,
    },
    {
      title: "Web Development",
      description:
        "Developed Personal Portfolio website and Dashboard for an innovative Health Care Idea.",
      icon: <DashboardIcon />,
    },
    {
      title: "Mentor and Leadership",
      description:
        "Led and managed the technical team of 11 members. Mentored 20+ freshers into performing Integration developers",
      icon: <AcUnitIcon />,
    },
    {
      title: "Mobile Apps",
      description:
        "Developed multiple android applications as part of undergraduate projects and for an innovative Health Care Idea ",
      icon: <PermDeviceInformationIcon />,
    },
    {
      title: "Awards",
      description:
        "Awarded as Project Star, 3rd place at Research & Development Committee Technical Paper Presentation, and 3rd prize for the project Smart Helmet.",
      icon: <AcUnitIcon />,
    },
  ];
  return (
    <Box className={classes.sectionDark} id="About">
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=" about us"
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading:
                  "Bonjour! I’m Aditya Prakash, EAI Developer at Capgemini.",
                description:
                  "Self-motivated and innovative tech-enthusiast with 3+ years of experience in developing and maintaining sophisticated middleware applications",
              })}
              <br />
              {/* {CardMedia({
              label: "labae1",
              Desc: "Desc1",
              Icon: <AcUnitIcon />,
            })} */}
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
