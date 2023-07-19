import React from "react";
import { useGlobalContext } from "../Context/Context";
import { styled } from "styled-components";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <Wrapper>
      <section className="quiz quiz-small">
        <form action="" className="setup-form">

          <h2>setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">Number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>

          <div className="form-control">
            <label htmlFor="category">category</label>
            <select name="category" id="category" className="form-input"
            value={quiz.category} onChange={handleChange}>
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select name="difficulty" id="difficulty" className="form-input"
            value={quiz.difficulty} onChange={handleChange}>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && <p className="error">
            can't generate questions, please try different options
          </p> }
          <button type="submit" onClick={handleSubmit}
          className="submit-btn"
          >Start</button>
        </form>

      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default SetupForm;