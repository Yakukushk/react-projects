import { useEffect, useState, useCallback, useRef } from "react";
import QUESTIONS from "../data";
import logoComplete from "../assets/quiz-complete.png";
import Question from "./Question";
import Summary from "./Summary";

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
  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  console.log(answerState)

  useEffect(() => {
    setActiveQuestionIndex(
      userAnswers.length
    );
    console.log(userAnswers.length);
  }, [userAnswers]);

  useEffect(() => {
    setAnswer({
      selectedAnswer: "",
      isCorrect: null,
    });
  }, [activeQuestionIndex]);

  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  useEffect(() => {
    console.log("Quiz State", quizComplete);
    console.log("Active Index", activeQuestionIndex);
    console.log("QUESTIONS length", QUESTIONS.length);
    console.log("userAnswers", userAnswers.length - 1);
  }, [activeQuestionIndex]);

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswer({
        selectedAnswer: selectedAnswer,
        isCorrect: null,
      });
      setTimeout(() => {
        setAnswer({
          selectedAnswer: selectedAnswer,
          isCorrect: QUESTIONS[activeQuestionIndex].answers[0] === selectedAnswer,
        });

        setTimeout(() => {
          setUserAnswers((prev) => {
            return [...prev, selectedAnswer];
          });
        }, 2000);
      }, 1000);
    },
    []
  );

  const skipSelectAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizComplete) {
    return (
      <Summary logoComplete={logoComplete} userAnswers={userAnswers}/>
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
        selectedAnswer={answer.selectedAnswer}
        activeQuestionIndex={activeQuestionIndex}
        skipSelectAnswer={skipSelectAnswer}
        quizComplete={quizComplete}
        timer={timer}
      />
    </div>
  );
}
