import { useRef } from "react";


export default function Answer({
  answers,
  answerState,
  selectedAnswer,
  onSelect,
}) {
  const shuffledAnswer = useRef();

  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answers] || [];
    shuffledAnswer.current.sort(() => Math.random() - 1);
  }


  return (
    <>
      <ul id="answers">
        {answers.map((answer) => {
          let cssClass = "";
          const isSelected = selectedAnswer === answer;

          if (answerState === "answered" && isSelected) {
            cssClass = "selected";
          }

          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            cssClass = answerState;
          }
          return (
            <li key={answer} className="answer">
              <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ''}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
