import React, { useState } from "react";
import Button from "react-bootstrap/Button";
//styles
const ques = {
  color: "rgba(16, 0, 81, 1)",
  fontSize: "22px",
  fontWeight: "bold",
  display: "inline"
};
const ans = {
  color:"#000" ,
  marginRight: "20%",
  fontSize: "15px"
}
const btn = {
  backgroundColor: "#fff",
  borderColor: "#fff",
  borderRadius: "100%",
  color: "#23f",
  width: 'auto'
};
const head = {
  display: "flex",
  justifyContent: "space-between",
  marginRight: "20%"
};
const Question = ({ title, info }) => {
  const [showinfo, setShowInfo] = useState(false);
  return (
    <article>
      <div style={head}>
        <span style={ques}>{title}</span>

        <Button style={btn}  onClick={() => setShowInfo(!showinfo)}>
          {showinfo ? '-' : '+'}
        </Button>
      </div>
      {showinfo && <p style={ans}>{info}</p>}
      <hr style={{ marginRight: "20%" }} />
    </article>
  );
};

export default Question;
