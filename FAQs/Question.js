import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [showinfo,setShowInfo] = useState(false);
  return (<article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=>setShowInfo(!showinfo)}>{showinfo?<AiOutlineMinus />:<AiOutlinePlus />}</button>
    </header>
    {showinfo && <p>{info}</p>}
  </article>);
};

export default Question;
