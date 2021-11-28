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
  fontWeight: "bolder",
  textAlign: "center",
};
const Tagline = {
  fontSize: "1.5rem",
  margin: "2rem",
  textTransform: "capitalize",
  color: "#000",
};

const upperCards = {
  margin: "1rem",
  border: "1px solid black",
};

const Activities = () => {
  return (
    <div className="Activitiescontainer">
      <Container fluid className="ActivitiesUpperSection">
        <h4 style={Section}>Our Latest Post</h4>
        <Row style={{textAlign: "center"}}>
          <Col>
            <p style={Tagline}>massa vitae tortor condimentum lacinia quis</p>
            <Image src="https://picsum.photos/950/500" fluid />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Maecenas accumsan lacus vel facilisis. Magna eget est lorem ipsum
              dolor. At ultrices mi tempus imperdiet. Erat nam at lectus urna
              duis convallis convallis. Egestas neque. Senectus et netus et
              malesuada fames. Egestas tellus rutrum tellus pellentesque eu
              tincidunt tortor. Adipiscing elit ut aliquam purus. Maecenas
              ultricies mi eget mauris pharetra et ultrices neque ornare. Id
              cursus metus aliquam eleifend mi in nulla. Congue nisi vitae
              suscipit tellus mauris a diam. Nibh venenatis cras sed felis.
              Mauris rhoncus aenean vel elit scelerisque mauris.
              <br />
              <br />
              Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
              Fames ac turpis egestas integer eget. Pellentesque dignissim enim
              sit amet venenatis urna cursus. Senectus et netus et malesuada
              fames ac. Ultrices in iaculis nunc sed augue. Pretium nibh ipsum
              consequat nisl vel pretium. Libero justo laoreet sit amet cursus
              sit. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus
              iaculis. In hendrerit gravida rutrum quisque non tellus orci ac
              auctor. Erat pellentesque adipiscing commodo elit at imperdiet
              dui. Vivamus arcu felis bibendum ut tristique e id diam vel. Felis
              imperdiet proin fermentum leo vel orci. Tortor pretium viverra
              suspendisse potenti nullam ac. Faucibus ornare suspendisse sed
              nisi lacus. In pellentesque massa placerat duis. Auctor urna nunc
              id cursus. Nisi quis eleifend quam adipium viverra suspendisse
              potenti. Tellus elementum sagittis vitae et leo duis ut diam quam.
              Amet mattis vulputate enim nulla aliquet porttitor.
              <br />
              <br />
              Congue nisi vitae suscipit tellus. Viverra accumsan in nisl nisi
              scelerisque eu ultrices vitae. Ut diam quam nulla porttitor massa.
              Ut sem nulla pharetra diam sit amet. Elementum pulvinar etiam non
              quam lacus suspendisse faucibus. Nulla facilisi morbi tempus
              iaculis urna. Orci eu lobortis elementum nibh tellus molestie nunc
              non. Id consectetur purus ut faucibus pulvinar elementum. Amet
              mattis vulputate enim nulla aliquet. Eu volutpat odio facilisis
              mauris sit amet. In hendrerit gravida rutrum quisque non. Lobortis
              mattis aliquam faucibus purus in massa. Mauris sit amet massa
              vitae tortor condimentum lacinia quis. Urna nec tincidunt praesent
              semper feugiat. Amet risus nullam eget felis eget nunc.
            </p>
          </Col>
        </Row>

        <br />
        <br />
        <h4 style={Section}>Youtube Videos</h4>
        <Row xs={1} md={2} lg={3}>
          <Col>
            <Card style={upperCards} >
              <iframe
                height="272px"
                width="100%"
                id="mediayoutubevideo1"
                src="https://www.youtube.com/embed/wcmnpkZzEkQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              <Card.Body>
                <Card.Title
                  style={{
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    textTransform: "capitalize",
                  }}>
                  Crime Free Bharat and it's 5 Certainties
                </Card.Title>
                <br />
                <Card.Text>
                  Talking about Crime Free Bharat and its 5 certainties, IPS
                  officer Maithili Sharan Gupta said Crime Free Bharat doesn’t
                  mean zero crime.
                </Card.Text>
                <Card.Text>
                  <div id="panelsStayOpen">
                    <button
                      className="btn text-secondary "
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#youtube1">
                      Read More
                    </button>
                  </div>
                  <div
                    id="youtube1"
                    className="modal fade"
                    aria-labelledby="panelsStayOpen-headingOne"
                    tabindex="-1"
                    aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="youtube1">
                            Brief
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          
                          Talking about Crime Free Bharat and its 5 certainties,
                          IPS officer Maithili Sharan Gupta said Crime Free
                          Bharat doesn’t mean zero crime,it means prevalence of
                          crime will not be felt and largely there will be an
                          environment of safety and security. The 5 certainties
                          of Crime Free Bharat are:
                          <ol>
                            <li>
                              Certainty of reporting/ cognizance of crime
                              without even visiting police station
                            </li>
                            <li>
                              Certainty of detection by providing state of the
                              art support to investigation officer
                            </li>
                            <li>
                              Certainty of conviction by providing support to
                              the courts including efficient and transparent
                              video based court trial system
                            </li>
                            <li>
                              Certainty of prevention by making it difficult to
                              commit crime
                            </li>
                            <li>
                              Certainty of rehabilitation of criminals and their
                              associates
                            </li>
                            <br />
                            <br />

                            <a href="https://www.youtube.com/watch?v=wcmnpkZzEkQ">
                              
                              Watch On Youtube
                            </a>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={upperCards} >
              <iframe
                height="272px"
                width="100%"
                id="mediayoutubevideo2"
                src="https://www.youtube.com/embed/vYM3yUAcTfA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              <Card.Body>
                <Card.Title
                  style={{
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    textTransform: "capitalize",
                  }}>
                  Maithili Sharan Gupta IPS on internship for students under
                  "Crime Free Bharat" initiative
                </Card.Title>
                <Card.Text>
                  On how students can do internship in Crime Free Bharat, IPS
                  officer Maithili Sharan Gupta said “We will assign a
                  topic/subject to a group of students .
                </Card.Text>
                <Card.Text>
                  <div id="panelsStayOpen">
                    <button
                      className="btn text-secondary "
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#youtube2">
                      Read More
                    </button>
                  </div>
                  <div
                    id="youtube2"
                    className="modal fade"
                    aria-labelledby="panelsStayOpen-headingOne"
                    tabindex="-1"
                    aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="youtube1">
                            Maithili Sharan Gupta IPS on internship for students
                            under "Crime Free Bharat" initiative
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          
                          On how students can do internship in Crime Free
                          Bharat, IPS officer Maithili Sharan Gupta said “We
                          will assign a topic/subject to a group of students and
                          then they will do a literature review following which
                          they will make a concept note and give presentation on
                          it. Importantly, this exercise will happen on a
                          virtual platform. Students don’t have to be physically
                          present before me”.
                          <br />
                          <br />
                          <a href="https://www.youtube.com/watch?v=vYM3yUAcTfA">
                                                        Watch On Youtube
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={upperCards}>
              <iframe
                height="272px"
                width="100%"
                id="mediayoutubevideo3"
                src="https://www.youtube.com/embed/Mu9dGLNbOKQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              <Card.Body>
                <Card.Title
                  style={{
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    textTransform: "capitalize",
                  }}>
                  Maithili Sharan Gupta IPS, explains what Crime Free Bharat is
                  in his views?
                </Card.Title>
                <Card.Text>
                  Explaining what Crime Free Bharat is, IPS officer Maithili
                  Sharan Gupta said by Crime Free Bharat we don't mean zero
                  incidence of crime.
                </Card.Text>
                <Card.Text>
                  <div id="panelsStayOpen">
                    <button
                      className="btn text-secondary "
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#youtube3">
                      Read More
                    </button>
                  </div>
                  <div
                    id="youtube3"
                    className="modal fade"
                    aria-labelledby="panelsStayOpen-headingOne"
                    tabindex="-1"
                    aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="youtube1">
                            Maithili Sharan Gupta IPS, explains what Crime Free
                            Bharat is in his views?
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          
                          Explaining what Crime Free Bharat is, IPS officer
                          Maithili Sharan Gupta said by Crime Free Bharat we
                          don't mean zero incidence of crime. The effort is to
                          create a safe and secure environment for the common
                          man. He talked about the 5 certainties of Crime Free
                          Bharat:
                          <ol>
                            <li>
                              Certainty of reporting/ cognizance of crime
                              without even visiting police station
                            </li>
                            <li>
                              Certainty of detection by providing state of the
                              art support to investigation officer
                            </li>
                            <li>
                              Certainty of conviction by providing support to
                              the courts including efficient and transparent
                              video based court trial system
                            </li>
                            <li>
                              Certainty of prevention by making it difficult to
                              commit crime
                            </li>
                            <li>
                              Certainty of rehabilitation of criminals and their
                              associates
                            </li>
                          </ol>
                          <br />
                          <br />
                          <a href="https://www.youtube.com/watch?v=Mu9dGLNbOKQ">
                                   Watch On Youtube
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  <br /><br />

        <h4 style={Section}>Our Other Posts</h4>
        <Row xs={1} md={2} lg={3}>
          {Array.from({length: 6}).map((_, idx) => (
            <Col>
              <Card style={upperCards}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/500"
                  alt=""
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      textTransform: "capitalize",
                    }}>
                    massa vitae tortor condimentum lacinia quis aliquam purus.
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Bibendum arcu vitae elementum curabitur vitae nunc
                    sed velit dignissim.
                  </Card.Text>
                  <Button href="#" variant="outline-secondary" size="sm">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col>
            <Card style={upperCards}>
              <Card.Img variant="top" src="https://picsum.photos/500" alt="" />
              <Card.Body>
                <Card.Title
                  style={{
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    textTransform: "capitalize",
                  }}>
                  An individual card for reference
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Bibendum arcu vitae elementum curabitur vitae nunc sed velit
                  dignissim.
                </Card.Text>
                <Button href="#" variant="outline-secondary" size="sm">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

       
      </Container>
    </div>
  );
};

export default Activities;
