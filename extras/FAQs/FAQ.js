import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function FAQ() {  
    const [currentPage,setCurrentPage] = useState(1);
    const [questionPerPage,setQuestionPerPage] = useState(5);
  const [questions,setQuestions] = useState(data);


  const indexOfLastQuestion = currentPage * questionPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion); 
  const totalPages = Math.floor(questions.length/questionPerPage)+1; //take another look
  console.log(totalPages)
  let navigator = currentPage;
  const next = ()=>{
      if(navigator+1>totalPages){
          navigator = 1;
      }else{
          navigator++;
      }
        setCurrentPage(navigator);
    }
    const previous = ()=>{
        if(navigator<2){
            navigator = totalPages;
        }else{
            navigator--;
        }
        setCurrentPage(navigator);
    }
  return <main>
          <div className="container">
            <h3>questions and answers</h3>
            <section className="info">
              {currentQuestions.map((question)=>{
                return (   
                <SingleQuestion key={question.id} {...question} />
                );
              })}
              
              <button onClick={previous} disabled={currentPage==1}>{'<'}</button>
              <span>{currentPage}{'/'}{totalPages}</span>
              <button onClick={next} disabled={currentPage==totalPages}>{'>'}</button>
            </section>
          </div>
        </main>;
}

export default FAQ;
