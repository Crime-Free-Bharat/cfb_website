import React, { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "react-bootstrap/Button";
//styles
const ques = {
  color: "rgba(16, 0, 81, 1)",
  fontSize: "22px",
  display: "inline"
};
const btn = {
  backgroundColor: "#fff",
  borderColor: "#fff",
  color: "#23f"
};
const head = {
  display: "flex",
  justifyContent: "space-between",
  marginRight: "20%"
};
const Question = ({ title, info }) => {
  const [showinfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header style={head}>
        <h4 style={ques}>{title}</h4>

        <Button style={btn} onClick={() => setShowInfo(!showinfo)}>
          {showinfo ? '-' : '+'}
        </Button>
      </header>
      {showinfo && <p style={{ marginRight: "20%" }}>{info}</p>}
      <hr style={{ marginRight: "20%" }} />
    </article>
  );
};

export default Question;
