import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const aboutSection = {
  color: "rgba(16, 0, 81, 1)",
  fontWeight: "bolder",
  margin: "2rem"
};
const aboutTagline = {
  fontSize: "1.5rem",
  margin: "2rem",
  color:"#000",
  fontWeight: "bold",
};
const upperSection = {
  width: "80%",
  fontFamily: "Roboto,Sans-serif",
};

const upperCards = {
  margin: "1rem",
  border: "1px solid black"
};
const underLine = {
  border: "1px solid rgba(255, 107, 23, 1)",
  position: "absolute",
  height: "0px",
  top: "2rem",
  width: "20%"
};

const certainities = {
  margin: "3rem",
  padding: "1rem",
  boxSizing: "border-box"
};

const bottomCards = {
  margin: "3rem",
  fontFamily: "Roboto,Sans-serif",
  padding: "2rem",
  border: "2px solid #DC8C5E",
  boxSizing: "border-box"
};

const cardHead = {
  color : "rgba(16, 0, 81, 1)",
}

const About = () => {
  return (
    <Container fluid style={upperSection}>
      <h1 style={aboutSection}>About Us</h1>
      <p style={aboutTagline}>Crime Free Bharat is a Creative Flow Bharat</p>
      <Row xs={1} md={2} lg={3}>
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card style={upperCards}>
              {/* <Card.Img variant="top" src="" alt="" /> */}
              <Card.Body>
                <Card.Title
                  style={cardHead}
                >
                  What is CFB?
                </Card.Title>
                <hr style={underLine} />
                <Card.Text>
                  Crime Free Bharat is dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </Card.Text>
                <Button href="#" variant="outline-secondary" size="sm">
                  Read More
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h5 style={aboutSection}>Certainities</h5>
      <Container fluid style={{ width: "120%" }}>
        <Row>
          <Col lg={4} style={certainities}>
            <Row lg={2}>
              <Card border="light">
                <Card.Body>
                  <Card.Title>CERTAINITY 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Certainity of registration
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Body>
                  <Card.Title>CERTAINITY 2</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Certainity of detection
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Body>
                  <Card.Title>CERTAINITY 3</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Certainity of conviction
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Body>
                  <Card.Title>CERTAINITY 4</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Certainity of prevention
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              <Card border="light">
                <Card.Body>
                  <Card.Title>CERTAINITY 5</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Certainity of rehabilitation
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Row>
            <Button href="#" variant="outline-success" size="lg">
              Learn More
            </Button>{" "}
          </Col>
          <Col lg={4} style={bottomCards}>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              augue lacus viverra vitae. Luctus venenatis lectus magna fringilla
              urna porttitor rhoncus dolor purus. Tristique senectus et netus et
              malesuada fames ac turpis. Id diam vel quam elementum pulvinar.
              Leo urna molestie at elementum eu facilisis. Ut ornare lectus sit
              amet est placerat in egestas erat. Purus in massa tempor nec
              feugiat nisl pretium fusce. Massa ultricies mi Lorem ipsum dolor
              sit amet, consectetur adipi
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} style={bottomCards}>
            <Card border="light">
              <Card.Body>
                <Card.Title style={aboutSection}>Crime Free Bharat</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  A multi-award winning creative, with a passion for the
                  details.
                </Card.Subtitle>
                <Card.Text>
                  Leigh has spent the last 16 years designing, and directing
                  work for some of the world’s most exciting and
                  forward-thinking brands, such as Google, Coca-Cola, Pepsi,
                  Ford,Some quick example text to build on the card title and
                  make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} style={bottomCards}>
            <div></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
