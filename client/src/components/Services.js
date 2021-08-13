import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import service1 from "../img/service1.svg";
import service2 from "../img/service2.svg";

const aboutSection = {
  color: "#fff",
  fontWeight: "bolder",
  margin: "2rem",
  fontSize: "3rem",
};
const upperSection = {
  width: "100%",
  padding: "5% 10%",
  fontFamily: "Roboto,Sans-serif",
  background: "rgba(29, 8, 113, 1)",
  color: "#fff",
  textAlign: "center",
};

const upperCards = {
  margin: "1rem",
  border: "2px solid white",
  borderRadius: "45px",
  background: "rgba(29, 8, 113, 1)",
};
const cardImg = {
  background: "#fff",
  borderRadius: "40px",
  padding: "4px",
  width: "80px",
  height: "80px",
  margin: "0.5rem",
};
const click = {
  color: "#fff",
  textDecoration: "none",
};

const Services = () => {
  return (
    <Container fluid style={upperSection}>
      <Row>
        <Col xs={3} md={2} lg={2}>
          <img src={service1} alt="serivces1" />
        </Col>
        <Col xs={6} md={8} lg={8}>
          <h5 style={aboutSection}>Our Services</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit duis tristique sollicitudin.
          </p>
        </Col>
        <Col xs={3} md={2} lg={2}>
          <img src={service2} alt="services2" />
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3}>
        <Col>
          <Card style={upperCards}>
            <Card.Body>
              <Button variant="link" style={click}>
                <Card.Img
                  style={cardImg}
                  variant="top"
                  src="https://img.icons8.com/material-rounded/2x/fine-print.png"
                  alt="Report Image"
                />
                <Card.Title>Report Crime Online</Card.Title>
              </Button>
              <Card.Text>
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
                <Card.Img
                  style={cardImg}
                  variant="top"
                  src="https://image.shutterstock.com/image-vector/high-detailed-vector-map-india-260nw-151001708.jpg"
                  alt="Report Image"
                />
                <Card.Title>Crime Mukt Bharat</Card.Title>
              </Button>
              <Card.Text>
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
                <Card.Img
                  style={cardImg}
                  variant="top"
                  src="https://img.icons8.com/material-rounded/2x/micro.png"
                  alt="Report Image"
                />
                <Card.Title>Interaction with IPS</Card.Title>
              </Button>
              <Card.Text>
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
                <Card.Img
                  style={cardImg}
                  variant="top"
                  src="https://img.icons8.com/material-rounded/2x/cyber-security.png"
                  alt="Report Image"
                />
                <Card.Title>Cyber Crime</Card.Title>
              </Button>
              <Card.Text>
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
                <Card.Img
                  style={cardImg}
                  variant="top"
                  src="https://img.icons8.com/material-rounded/2x/railway-station.png"
                  alt="Report Image"
                />
                <Card.Title>Railway Crime</Card.Title>
              </Button>
              <Card.Text>
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
                <Card.Img
                  style={cardImg}
                  variant="top"
                  src="https://img.icons8.com/material-rounded/2x/cloud-network.png"
                  alt="Report Image"
                />
                <Card.Title>Web Portal</Card.Title>
              </Button>
              <Card.Text>
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
