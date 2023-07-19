import React from "react";
import { useGlobalContext } from "../Context/Context";
import { styled } from "styled-components";

const Main = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math .random() * 4)
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }
  return (
    <Wrapper>
      <main>
        <section className="quiz">
          <p className="qualification">
            question #{index + 1} | qualification : {correct}/{index}
          </p>
          <article className="container">
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <div className="choose-div">
              {answers.map((answer, index) => {
                return (
                  <button
                    key={index}
                    className="answer-btn"
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                );
              })}
            </div>
          </article>
          <button className="next-question" onClick={nextQuestion}>
            Next question
          </button>
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .quiz {
  }

  .container h2 {
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1.5;
    text-transform: none;
  }
  .answer-btn {
    display: block;
    width: 100%;
    margin: 0.75rem auto;
    background: orange;
    border-radius: 10px;
    border-color: transparent;
    color: #000;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: 0.5s;
  }

  .next-question{
    background-color: white;
    color: black;
  }
`;

export default Main;
