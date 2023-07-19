import React from "react";
import { useGlobalContext } from "../Context/Context";
import { styled } from "styled-components";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <Wrapper>
      <section>
        <div className="quiz quiz-small">
          <form action="" className="setup-form">
            <h2>setup quiz</h2>
            <div className="form-control">
              <label htmlFor="amount">Select number of questions</label>
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
              <select
                name="category"
                id="category"
                className="form-input"
                value={quiz.category}
                onChange={handleChange}
              >
                <option value="sports">sports</option>
                <option value="history">history</option>
                <option value="politics">politics</option>
              </select>
            </div>

            <div className="form-control">
              <label htmlFor="difficulty">difficulty</label>
              <select
                name="difficulty"
                id="difficulty"
                className="form-input"
                value={quiz.difficulty}
                onChange={handleChange}
              >
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
              </select>
            </div>
            {error && (
              <p className="error">
                can't generate questions, please try different options
              </p>
            )}
            <button type="submit" onClick={handleSubmit} className="submit-btn">
              Start
            </button>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  .quiz {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 4rem auto;
    background: #ffa600bb;
    border-radius: 5px;
    padding: 3rem;
  }
  .setup-form h2 {
    margin-bottom: 2rem;
  }
  .form-control {
    margin-bottom: 2rem;
  }
  #amount{
    width: 60%;
    text-align: center;
  }

  .form-input {
    width: 100%;
    color: black;
    background: white;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    width: 100%;
    border-radius: 5px;
  }
  .error {
    color: red;
    text-transform: capitalize;
  }
  .submit-btn {
    width: 100%;
    margin-top: 3rem;
    color : white
  }
`;

export default SetupForm;
