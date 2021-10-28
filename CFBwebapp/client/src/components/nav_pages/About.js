import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <Container fluid className="aboutupperSection">
      <h1 className="aboutpageSection">About Us</h1>
      <p className="aboutTagline">
        {/* Crime Free Bharat is a Creative Flow Bharat */}
        <i>"Surakshit Bharat Sarvshresth Bharat"</i>
      </p>

      <Card className="aboutupperCards">
        <Card.Body>
          <Card.Title className="aboutcardHead ">What is CFB?</Card.Title>
          <hr className="aboutunderLine " />
          <Card.Text>
            <p>
              Crime Free Bharat is a visionary approach by Maithili Sharan
              Gupta, President CFB mission and former DGP (Police Reform) for
              India. The purpose of the mission is to eradicate crime from india
              where solely 42% of the politicians themselves hold criminal
              records. Crime Mukt Bharat aims to develop a transparent justice
              system , with an approach to solve 3.19 crore pending cases in a
              period of two years . It aims to provides justice at the door step
              of every indian , not only to the privileged but to every
              individual , so that they can lodge an fir without the need to
              visit police station .
            </p>
            <p>
              Justice delayed is Justice denied, Crime Free Bharat aims not only
              to provide justice to the victims after crime has happened but to
              prevent the mere happening of crime ;with larger database and
              larger coverage , to ensure a safer environment . Having criminals
              in radar , still not taking them in custody with the possibility
              of rehabilitation of criminals with the help of psychologists to
              revert criminals into a good source of human assets . Crime Mukt
              Bharat is also seeking development of india by growing economy
              with an objective to increase per capita income upto three times
              and GDP upto 5 times , expanding economy from three trillion to
              fifteen trillion with minimun investment from government side . It
              is working in a revenue flow system where every stake holder , who
              is no other than 1.37 crore indians circulate revenue through five
              revenue streams generated by crime mukt bharat .
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <h2 className="aboutpageSection">Certainities</h2>
      <Container fluid style={{width: "140%"}}>
        <Row>
          <Col lg={3} className="aboutcertainities ml-5 ">
            <Card
              border="light"
              bg="warning"
              style={{
                width: "15rem",
                height: "3rem",
                margin: "70px 60px 35px",
              }}>
              <div className="numberCircle aboutnumberCircle">1</div>
              <Card.Body>
                <Card.Title className="aboutcardFont">
                  Certainity of Reporting
                </Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
              </Card.Body>
            </Card>
            <Card
              border="light"
              bg="warning"
              style={{
                width: "17rem",
                height: "3rem",
                margin: "15px 15px 5px 35px",
              }}>
              <div className="numberCircle aboutnumberCircle">2</div>
              <Card.Body>
                <Card.Title className="aboutcardFont">
                  Certainity of Detection
                </Card.Title>
              </Card.Body>
            </Card>
            <br />
            <Card
              border="light"
              bg="warning"
              style={{
                width: "20rem",
                height: "3rem",
                margin: "10px 15px 40px 15px",
              }}>
              <div className="numberCircle aboutnumberCircle">3</div>
              <Card.Body>
                <Card.Title className="aboutcardFont">
                  Certainity of Conviction
                </Card.Title>
              </Card.Body>
            </Card>
            <Card
              border="light"
              bg="warning"
              style={{
                width: "25rem",
                height: "3rem",
                margin: "10px -18px 10px",
              }}>
              <div className="numberCircle aboutnumberCircle">4</div>
              <Card.Body>
                <Card.Title className="aboutcardFont">
                  Certainity of Prevention
                </Card.Title>
              </Card.Body>
            </Card>
            <br />
            <Card
              border="light"
              bg="warning"
              style={{
                width: "31rem",
                height: "3.3rem",
                margin: "10px -60px 0px ",
              }}>
              <div className="numberCircle aboutnumberCircle">5</div>
              <Card.Body>
                <Card.Title className="aboutcardFont">
                  Certainity of Rehabilitation of Criminals
                </Card.Title>
              </Card.Body>
            </Card>

            {/* <Button href="#" variant="outline-success" size="lg">
              Learn More
            </Button> */}
          </Col>
          <Col lg={4} className="aboutbottomCards">
            <p className="aboutcertainStyle">
              <h5> CERTAINTY OF REPORTING </h5>
              <ul>
                <li>
                  Guarantee of no discrimination in (caste, colour, place).
                </li>
                <li>Guarantee of action against every criminal activity.</li>
                <li>Guarantee of no language or dialect barrier</li>
                <li>Guarantee of action against every false complaint.</li>
              </ul>
              <h5>CERTAINTY OF DETECTION</h5>
              <ul>
                <li>
                  Use of nearby cameras and technology for crime detection.
                </li>
                <li>
                  Guarantee of collecting evidence with the help of some
                  technology.
                </li>
              </ul>
              <h5>CERTAINTY OF CONVICTION</h5>
              <ul>
                <li>Guarantee of no innocent getting every punished.</li>
              </ul>
              <h5>CERTAINTY OF PREVENTION</h5>
              <ul>
                <li>System that can predict the crime intention. </li>
                <li>Guarantee of preventing crime before happening. </li>
              </ul>
              <h5>CERTAINTY OF REHABILITATION OF CRIMINALS</h5>
              <ul>
                <li>
                  Guarantee of rehabilitating criminals making them a better
                  person.
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
      <Card className="aboutupperCards">
        <Card.Body>
          <Card.Title className="aboutcardHead">
            This mission aims to :
          </Card.Title>
          <hr className="aboutunderLine" />
          <Card.Text>
            <p>
              <ul>
                <li>
                  Make a transparent legal system ,to provide justice to each
                  individual .
                </li>
                <li>
                  Provide a technological support to every indian so that they
                  may lodge complaints without actually visiting local police
                  stations.
                </li>
                <li>
                  To eradicate crime from india and making a superior judicial
                  system of lawyers , police officers , forensic experts , cyber
                  security experts , police and judges and making a platform
                  where they can remotely work with renumeration and recognition
                  with additional incentives on additional cases they work upon
                  .
                </li>
                <li>
                  Provide a proper flow of revenue to every stake holder , who
                  are no other than 1.37 crore indians by five revenue streams
                </li>
                <li>
                  Develop such a sytem within three to six months with a vision
                  to solve 3.19 crore pending cases in the court of law within a
                  span of two years .
                </li>
              </ul>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
