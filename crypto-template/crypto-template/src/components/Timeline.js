import React from "react";
import { IconContext } from "react-icons";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { RiRoadMapFill } from "react-icons/ri";
import Paper from "@material-ui/core/Paper";
import { Row, Col, Container } from "reactstrap";
export default function CustomizedTimeline() {
  return (
    <>
      <Container className="roadmap-container">
        <IconContext.Provider value={{ className: "icon" }}>
          <Row>
            <RiRoadMapFill color="primary" />
          </Row>
        </IconContext.Provider>
        <Row className="roadmap-title">
          <h1>The roadmap</h1>
        </Row>
        <Row className="roadmap-subtitle">
          <h5>What we'll be up in 2021</h5>
        </Row>
      </Container>

      <Timeline align="alternate" className="timeline">
        <TimelineItem>
          <TimelineOppositeContent>
            <h1 className="timeline_title">Q1 2021</h1>
          </TimelineOppositeContent>
          <TimelineSeparator className="timeline_separator">
            <TimelineDot className="timeline_dot"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={5} className="timeline_paper">
              <h1 className="timeline_paper_title">Lorem ipsum</h1>
              <h5>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </h5>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <h1 className="timeline_title">Q2 2021</h1>
          </TimelineOppositeContent>
          <TimelineSeparator className="timeline_separator">
            <TimelineDot className="timeline_dot"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={5} className="timeline_paper">
              <h1 className="timeline_paper_title">Lorem ipsum</h1>
              <h5>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </h5>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <h1 className="timeline_title">Q3 2021</h1>
          </TimelineOppositeContent>
          <TimelineSeparator className="timeline_separator">
            <TimelineDot className="timeline_dot"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={5} className="timeline_paper">
              <h1 className="timeline_paper_title">Lorem ipsum </h1>
              <h5>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </h5>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <h1 className="timeline_title">Q4 2021</h1>
          </TimelineOppositeContent>
          <TimelineSeparator className="timeline_separator">
            <TimelineDot className="timeline_dot"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={5} className="timeline_paper">
              <h1 className="timeline_paper_title">Lorem ipsum</h1>
              <h5>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </h5>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
