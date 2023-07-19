import React from "react";
import { useGlobalContext } from "../Context/Context";
import styled from "styled-components";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? "modal-container open" : "modal-container"
        }`}
      >
        <div className="modal-content">
          <h2>congrats!!!</h2>
          <p>
            You answered {((correct / questions.length) * 100).toFixed(0)}% of
            questions correctly
          </p>
          <button className="close-btn" onClick={closeModal}>
            Play again
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  .modal-container {
    position: fixed;
    margin: auto;
    width: 70%;
    height: 35%;
    color: black;
    background: rgba(255, 255, 255, 0.886);
    border: solid orange 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 1s;
    z-index: -1;
  }

  .open {
    opacity: 1;
    z-index: 999;
  }

  @media (min-width:992px) {
    .modal-container {
      width: 40%;
      height: 35%;
    }
  }
`;

export default Modal;
