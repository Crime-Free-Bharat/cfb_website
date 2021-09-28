import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import data from "../../api/data_faq";
import SingleQuestion from "../../api/Question";
import faqimg from "../../img/faq.svg";

// styles
const containers = {
  padding: "1.5% auto",
  margin: "1.5%",
};

const faqHeading = {
  color: "rgba(16, 0, 81, 1)",
  fontFamily: "Roboto, Sans-Serif",
  fontSize: "32px",
  lineHeight: "35px",
  fontWeight: "bold",
  margin: "2rem auto",
};

const infor = {
  margin: "3rem auto",
  padding: "3%",
  fontFamily: "Roboto, Sans-Serif",
};

const btns = {
  borderRadius: "100%",
  borderColor: "#fff",
  backgroundColor: "rgba(76, 0, 185, 1)",
  width: "auto",
  color: "#fff",
};
const pagination = {
  padding: "1%",
  textAlign: "right",
  marginRight: "20%",
};
function FAQ() {
  const [currentPage, setCurrentPage] = useState(1);
  const [questionPerPage] = useState(4);
  const [questions] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const searchedQuestions = questions.filter((val) => {
    if (
      val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.info.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });
  const indexOfLastQuestion = currentPage * questionPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;
  const currentQuestions = searchedQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const totalPages = Math.floor(searchedQuestions.length / questionPerPage) + 1;
  let navigator = currentPage;
  const next = () => {
    if (navigator + 1 > totalPages) {
      navigator = 1;
    } else {
      navigator++;
    }
    setCurrentPage(navigator);
  };
  const previous = () => {
    if (navigator < 2) {
      navigator = totalPages;
    } else {
      navigator--;
    }
    setCurrentPage(navigator);
  };
  return (
    <Container fluid style={containers}>
      <Row>
        <Col xs={4} md={4} lg={4} style={infor}>
          <Image src={faqimg} fluid />
        </Col>
        <Col xs={7} md={7} lg={7} style={infor}>
          <h3 style={faqHeading}>Frequently Asked Questions</h3>
          <section>
            <input
              style={{ margin: "3% auto" }}
              type="text"
              placeholder="Search for questions..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            {currentQuestions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
            <div style={pagination}>
              <Button
                variant="info"
                style={btns}
                onClick={previous}
                disabled={currentPage === 1}
              >
                {"<"}
              </Button>
              <span>
                {currentPage}
                {"/"}
                {totalPages}
              </span>

              <Button
                variant="info"
                style={btns}
                onClick={next}
                disabled={currentPage === totalPages}
              >
                {">"}
              </Button>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;
