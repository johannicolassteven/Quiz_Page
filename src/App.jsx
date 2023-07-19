import react from 'react'
import { useState, useEffect } from "react";
import { useGlobalContext } from "./Context/Context";
import "./App.css";
import SetupForm from "./Components/SetupForm";
import Loading from "./Components/Loading";
import Modal from './Components/Modal';
import Main from './Components/Main';

function App() {
  const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];

  return (
    <>
    <Modal/>
    <Main/>
    </>
  );
}

export default App;
