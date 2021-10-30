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
  borderRadius: "40px",
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
              <Button variant="link"href="/report" style={click}>
                <i style={cardImg} class="bi bi-journal-check"></i>
                
                <Card.Title>Report Crime Online</Card.Title>
              </Button>
              <Card.Text style = {servicetext}>
              Any crime can be reported online in Crime free bharat by using the simple and confidential online service. Any person can report any crime that they have witnessed. 
              <br />The crime can be reported by giving the details of the victim and the crime that happened. The time and date of the crime must be mentioned.
               {/* If applicable, the details of all the offenders and the witness of the crime must also be noted. If there is any evidence, it should be informed which will help the investigation officers in a proper investigation.
                The victim can report his complaint through the website and CFB will reach them and try to help them. They are very efficient.  <br /><br /><br /><br /><br /> */}

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={upperCards}>
            <Card.Body>
              <Button variant="link" href="/" style={click}>
                <i style={cardImg} class="bi bi-award"></i>
                <Card.Title>Crime Mukt Bharat</Card.Title>
              </Button>
              <Card.Text style = {servicetext}>
              Crime-free bharat generally means our country India should be completely crime-free. Our mother earth should have no cases of cybercrime nor any other crime as well. Cases should be reduced and proper legal actions should be taken. The legislation needs to be strict. Strong penal actions should come up and penalties must be imposed. 
              {/* Our Bharat will be crime Mukt or crime-free only when the cases will turn down to "0" from 1,00,000. This will surely take a lot of time. But we can all raise our voices and stand against crime. 
<br />Crime Free India” is a vision that should not be taken for its literal meaning of achieving zero crime. As said by Maithili Sharan Sir, there will always be some sort of violations but what he meant from this thing is that crime may occur but there must be a perceptible sense of security {'&'} safety.  */}

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
              A proper interaction with IPS probationers can help us know a lot of things. The benefit which we can get is automatic notification received for suspicious activities. The malicious activities deleted for accessing the networks. 
              The IPS will ensure less disruption of the systems as well as reduce different security incidents. 
              {/* IPS and investigation officers can investigate the crime and help the victims. <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={upperCards}>
            <Card.Body>
              <Button variant="link"  style={click}>
                <i style={cardImg} class="bi bi-window"></i>
                <Card.Title>Cyber Crime</Card.Title>
              </Button>
              <Card.Text style = {servicetext}>
              Identity theft, child pornography, cyberbullying, cyber sex-trafficking, cyber-stalking, and cyber terrorism are some cybercrimes where most teenagers become a part of either voluntarily or by getting trapped. 
              {/* Now, if we compare the real-life criminals and cyber attackers, it is found that committing the crime online by the cyber attackers is very easy as it requires less planning and can easily cover up the records by disguising themselves.  */}
              The major reason for falling prey to these crimes could be  emotions as they play a very important part in a teenager's life

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
              Amongst the crimes regarding property registered in railways, according to reports, the share of theft was as highest at 95.9% which was followed by robbery (3.7%) dacoity (0.26%), and criminal trespass/burglary (0.3%). Crime is something that can occur everywhere. Out of 28 states, 19 states have reported railway crimes. 
              {/* A railway crime can include murder, rape, kidnapping, abduction, dacoity, drugging, criminal breach of trust with counterfeiting and, other property offences. <br /><br /><br /> */}
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
              The web portal of CFB contains all the details in an elaborative way. This contains the objective of crime free bharat, a speech by CA Harish, information about Automated Investigation Support System. The portal includes all the details in a systematic way and conveys things in a proper way. 
              {/* Web portal is also known as a database with all the information from top to bottom. The crime free bharat web portal consists of their works, their objectives, their upcoming projects and many more. A web portal gives us all the information in a compact and concise way. <br /><br /> */}

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
