import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import service1 from "../../img/service3.svg";
import service2 from "../../img/service2.svg";

const aboutSection = {
  color: "#fff",
  fontWeight: "bolder",
  margin: "2rem",
  fontSize:"35px"
};
const upperSection = {
  width: "100%",
  padding: "5% 10%",
  fontFamily: "Roboto,Sans-serif",
  background: "rgba(29, 8, 113, 1)",
  color: "#fff",
  textAlign: "center"
};
const servicesimg ={
  height:"200px"
}
const upperCards = {
  margin: "1rem",
  border: "4px solid white",
  borderRadius: "20%",
  background: "rgba(29, 8, 113, 1)"
};
const cardImg = {
  fontSize: "60px",
};
const click = {
  color: "#fff",
  textDecoration: "none"
};
const servicetext = {
  color: "#fff",
}

const Services = () => {
  return (
    <Container fluid style={upperSection}>
      
        <Row>
        <Col md={2} lg={3}>
            <img style={servicesimg} src = {service1} alt="serivces1" />
        </Col>
        <Col xs={12} md={8} lg={6}>
      <h5 style={aboutSection}>Our Services</h5>
      <p style = {servicetext}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
        consectetur adipiscing elit duis tristique sollicitudin.
      </p></Col>
      <Col md={2} lg={3}>
      < img style={{height:"200px"}} src = {service2} alt="services2" />
      </Col>
      </Row>
      < br /> < br />
      <Row xs={1} md={2} lg={3}>
        <Col>
          <Card style={upperCards}>
            <Card.Body>
              <Button variant="link" style={click}>
                <i style={cardImg} class="bi bi-journal-check"></i>
                
                <Card.Title>Report Crime Online</Card.Title>
              </Button>
              <Card.Text style = {servicetext}>
                Crime Free Bharat is dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={upperCards}>
            <Card.Body>
              <Button variant="link" style={click}>
                <i style={cardImg} class="bi bi-award"></i>
                <Card.Title>Crime Mukt Bharat</Card.Title>
              </Button>
              <Card.Text style = {servicetext}>
                Crime Free Bharat is dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={upperCards}>
            <Card.Body>
              <Button variant="link" style={click}>
                <i style={cardImg} class="bi bi-chat-square-quote"></i>
                <Card.Title>Interaction with IPS</Card.Title>
              </Button>
              <Card.Text style = {servicetext}>
                Crime Free Bharat is dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={upperCards}>
            <Card.Body>
              <Button variant="link" style={click}>
                <i style={cardImg} class="bi bi-window"></i>
                <Card.Title>Cyber Crime</Card.Title>
              </Button>
              <Card.Text style = {servicetext}>
                Crime Free Bharat is dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={upperCards}>
            <Card.Body>
              <Button variant="link" style={click}>
                <i style={cardImg}class="bi bi-shield-lock"></i>
                <Card.Title>Railway Crime</Card.Title>
              </Button>
              <Card.Text style = {servicetext}>
                Crime Free Bharat is dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={upperCards}>
            <Card.Body>
              <Button variant="link" style={click}>
                <i style={cardImg} class="bi bi-laptop"></i>
                <Card.Title>Web Portal</Card.Title>
              </Button>
              <Card.Text style = {servicetext}>
                Crime Free Bharat is dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
