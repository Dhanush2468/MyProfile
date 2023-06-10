import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const projects = [
    {
      title1: "Drink-Shop",
      description: "Click-To-View",
      imgUrl: projImg1,
    },
    {
      title2: "Basic_BookFinder",
      description2: "Click-To-View",
      imgUrl: projImg2,
    },
    {
      title3: "Sound-Cloud",
      description3: "Click-To-View",
      imgUrl: projImg3,
    },
  ];

  const handleTabSelect = (key) => {
    setActiveTab(key);
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Discover a diverse range of projects in today's digital landscape, from a cryptocurrency tracker app
                    for monitoring market trends and investments, to a bookfinder platform, a convenient drinkshop
                    application, a time management app for organizing schedules and maximizing productivity, and an
                    environmental monitoring system for real-time data on air quality, temperature, and noise levels.
                  </p>
                  <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleTabSelect}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Relevel Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Internship Company Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h1>Tab 3 Content</h1>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
