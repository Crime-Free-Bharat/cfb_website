import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Section = {
  color: "#1d0871",
  fontSize: "2rem",
  margin: "2rem",
  fontWeight: "bolder"
};
const Tagline = {
  fontSize: "1.5rem",
  margin: "2rem",
  textTransform: "capitalize",
  color:"#000"
};
const upperSection = {
  width: "80%",
  fontFamily: "Roboto,Sans-serif"
};

const upperCards = {
  margin: "1rem",
  border: "1px solid black"
};

const Activities = () => {
  return (
    <Container fluid style={upperSection}>
      <h4 style={Section}>Our Latest Post</h4>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <p style={Tagline}>massa vitae tortor condimentum lacinia quis</p>
          <Image src="https://picsum.photos/950/500" fluid />

          <p style={{ textAlign: "left", color: "#000", margin: "2rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas
            accumsan lacus vel facilisis. Magna eget est lorem ipsum dolor. At
            ultrices mi tempus imperdiet. Erat nam at lectus urna duis convallis
            convallis. Egestas neque. Senectus et netus et malesuada fames.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Adipiscing elit ut aliquam purus. Maecenas ultricies mi eget mauris
            pharetra et ultrices neque ornare. Id cursus metus aliquam eleifend
            mi in nulla. Congue nisi vitae suscipit tellus mauris a diam. Nibh
            venenatis cras sed felis. Mauris rhoncus aenean vel elit scelerisque
            mauris.
            <br />
            <br />
            Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
            Fames ac turpis egestas integer eget. Pellentesque dignissim enim
            sit amet venenatis urna cursus. Senectus et netus et malesuada fames
            ac. Ultrices in iaculis nunc sed augue. Pretium nibh ipsum consequat
            nisl vel pretium. Libero justo laoreet sit amet cursus sit.
            Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.
            In hendrerit gravida rutrum quisque non tellus orci ac auctor. Erat
            pellentesque adipiscing commodo elit at imperdiet dui. Vivamus arcu
            felis bibendum ut tristique e id diam vel. Felis imperdiet proin
            fermentum leo vel orci. Tortor pretium viverra suspendisse potenti
            nullam ac. Faucibus ornare suspendisse sed nisi lacus. In
            pellentesque massa placerat duis. Auctor urna nunc id cursus. Nisi
            quis eleifend quam adipium viverra suspendisse potenti. Tellus
            elementum sagittis vitae et leo duis ut diam quam. Amet mattis
            vulputate enim nulla aliquet porttitor.
            <br />
            <br />
            Congue nisi vitae suscipit tellus. Viverra accumsan in nisl nisi
            scelerisque eu ultrices vitae. Ut diam quam nulla porttitor massa.
            Ut sem nulla pharetra diam sit amet. Elementum pulvinar etiam non
            quam lacus suspendisse faucibus. Nulla facilisi morbi tempus iaculis
            urna. Orci eu lobortis elementum nibh tellus molestie nunc non. Id
            consectetur purus ut faucibus pulvinar elementum. Amet mattis
            vulputate enim nulla aliquet. Eu volutpat odio facilisis mauris sit
            amet. In hendrerit gravida rutrum quisque non. Lobortis mattis
            aliquam faucibus purus in massa. Mauris sit amet massa vitae tortor
            condimentum lacinia quis. Urna nec tincidunt praesent semper
            feugiat. Amet risus nullam eget felis eget nunc.
          </p>
        </Col>
      </Row>

      <br />
      <br />
      <h4 style={Section}>Our Other Posts</h4>
      <Row xs={1} md={2} lg={3}>
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card style={upperCards}>
              <Card.Img variant="top" src="https://picsum.photos/500" alt="" />
              <Card.Body>
                <Card.Title
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", textTransform:"capitalize"  }}
                >
                  massa vitae tortor condimentum lacinia quis aliquam purus.
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Bibendum arcu vitae elementum curabitur vitae nunc sed velit
                  dignissim.
                </Card.Text>
                <Button href="#" variant="outline-secondary" size="sm">
                  Read More
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col>
          <Card style={upperCards}>
            <Card.Img variant="top" src="https://picsum.photos/500" alt="" />
            <Card.Body>
              <Card.Title
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", textTransform:"capitalize" }}
              >
                An individual card for reference
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Bibendum arcu vitae elementum curabitur vitae nunc sed velit
                dignissim.
              </Card.Text>
              <Button href="#" variant="outline-secondary" size="sm">
                Read More
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activities;
