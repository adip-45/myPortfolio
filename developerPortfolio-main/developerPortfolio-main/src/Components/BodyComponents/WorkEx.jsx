import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";

import image1 from "../../images/5-2.jpg";
import image2 from "../../images/5-3.jpg";
import image3 from "../../images/5-4.jpg";
import image4 from "../../images/5-6.jpg";
import image5 from "../../images/5-8.jpg";
import image6 from "../../images/5-9.jpg";
import ScrollAnimation from "react-animate-on-scroll";

import "./Timeline.css";
import { ReactComponent as WorkIcon } from "./svgs/work.svg";
import { ReactComponent as SchoolIcon } from "./svgs/school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function WorkEx() {
  const classes = useStyles();

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  const portfolioData = [
    { url: image1, title: "# Portfolio ", link: "" },
    { url: image2, title: "# Portfolio ", link: "" },
    { url: image3, title: "# Portfolio ", link: "" },
    { url: image4, title: "# Portfolio ", link: "" },
    { url: image5, title: "# Portfolio ", link: "" },
    { url: image6, title: "# Portfolio ", link: "" },
  ];

  return (
    <Box className={classes.section} id="Timeline">
      <ScrollAnimation animateIn="fadeIn">
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Timeline",
              heading: "My Journey So Far...",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        {/* imge section  */}

        <Container maxWidth="xl">
          <VerticalTimeline>
            {timelineElements.map((element) => {
              let isWorkIcon = element.icon === "work";
              let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";

              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p id="description">{element.description}</p>
                  {showButton && (
                    <a
                      className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                      }`}
                      href={element.link}
                    >
                      {element.buttonText}
                    </a>
                  )}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
