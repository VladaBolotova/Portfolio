import {Container, Row, Col } from "react-bootstrap";
 import Nav from 'react-bootstrap/Nav';


export const Projects = () => {

    const projects = [
{
    title: "",
    description: "",
    imgUrl: "",
},
{
    title: "",
    description: "",
    imgUrl: "",
},
{
    title: "",
    description: "",
    imgUrl: "",
},
{
    title: "",
    description: "",
    imgUrl: "",
},
    ]
    return (
    <section className="projects" id="projects">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>AHDBCAJHEBCDJSHEDBCJHEBDCJHHEBDCJWDEBCJBEDJFBCJEFDSAKJE</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" defaultActiveKey="/home">
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
                        <p>{projects.title}</p>
                    )
                })
                }
            </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <Row>
                {
                projects.map((projects, index) => {
                    return (
                        <p>{projects.title}</p>
                    )
                })
                }
            </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            <Row>
                {
                projects.map((projects, index) => {
                    return (
                        <p>{projects.title}</p>
                    )
                })
                }
            </Row>
        </Tab.Pane>
        
    </Tab.Content>
    </Tab.Container>

                </Col>
            </Row>
        </Container>

    </section>
    )
}