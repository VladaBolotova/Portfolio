import {Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


 import proj1 from "../assets/img/s.png"
 import proj2 from "../assets/img/movie.png"
 import proj3 from "../assets/img/fitness.png"


export const Projects = () => {

    const projects = [
{
    title: "Travelr",
    imgUrl: proj1,
    link: "https://github.com/JaredSchips/travelr"
},
{
    title: "Movie App",
    imgUrl: proj2,
    link: "https://github.com/VladaBolotova/Movie-App"
},
{
    title: "Fitness App",
    imgUrl: proj3,
    link: "https://github.com/VladaBolotova/Fitness-Tracker"
},

    ]
    return (
    <section className="projects" id="projects">
        <Container>
            <Row>
                <Col>
                <h2 class="text-center">Projects</h2>
                <p class="text-center">Here are a few past design projects I've worked on.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
      <Nav.Item>
        <Nav.Link eventKey="first">Tab one</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third" third>
          Tab three
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
           Coming soon...
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          Coming soon...
        </Tab.Pane>
        
    </Tab.Content>
    </Tab.Container>

                </Col>
            </Row>
        </Container>
      

    </section>
    )
}