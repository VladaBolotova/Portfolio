import {Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


 import proj1 from "../assets/img/project-img1.png"


export const Projects = () => {

    const projects = [
{
    title: "Weather App",
    description: "Development",
    imgUrl: proj1,
},
{
    title: "Movie App",
    description: "Design",
    imgUrl: proj1,
},
{
    title: "Fitness App",
    description: "Wellness & Life",
    imgUrl: proj1,
},

    ]
    return (
    <section className="projects" id="projects">
        <Container>
            <Row>
                <Col>
                <h2 class="text-center">Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
      <Nav.Item>
        <Nav.Link eventKey="first">Tab one</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third" third>
          Tab 3
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey="first">
            <Row>
                {
                projects.map((projects, index) => {
                    return (
                      <ProjectCard
                      key={index}
                      {...projects}/>
                    )
                })
                }
            </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            Vlada
        </Tab.Pane>
        <Tab.Pane eventKey="third">
           Vlada
        </Tab.Pane>
        
    </Tab.Content>
    </Tab.Container>

                </Col>
            </Row>
        </Container>
      

    </section>
    )
}