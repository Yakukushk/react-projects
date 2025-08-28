import { useEffect, useState, useCallback, useRef } from "react";
import QUESTIONS from "../data";
import logoComplete from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz({}) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  useEffect(() => {
    setActiveQuestionIndex(
      answerState === "" ? userAnswers.length : userAnswers.length - 1
    );
    console.log(userAnswers.length);
  }, [userAnswers]);

  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  useEffect(() => {
    console.log("Quiz State", quizComplete);
    console.log("Active Index", activeQuestionIndex);
    console.log("QUESTIONS length", QUESTIONS.length);
    console.log("userAnswers", userAnswers.length - 1);
  }, [activeQuestionIndex]);

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      //   setAnswerState("answered");
      setAnswer({
        selectedAnswer: selectedAnswer,
        isCorrect: null,
      });
      setTimeout(() => {
        setAnswer({
          selectedAnswer: answer,
          isCorrect: QUESTIONS[activeQuestionIndex].answers[0] === answer,
        });
        setTimeout(() => {
          setUserAnswers((prev) => {
            return [...prev, selectedAnswer];
          });
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  const skipSelectAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={logoComplete} alt="logo-complete" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionsText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        answerState={answerState}
        selectedAnswer={answer}
        activeQuestionIndex={activeQuestionIndex}
        skipSelectAnswer={skipSelectAnswer}
        quizComplete={quizComplete}
      />
    </div>
  );
}
