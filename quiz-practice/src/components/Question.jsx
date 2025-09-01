import Answer from "./Answer";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  questionsText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  skipSelectAnswer,
  quizComplete,
  timer,
}) {
  return (
    <div id="question">
      {quizComplete ? (
        <h2>Quiz Finished</h2>
      ) : (
        <>
          <QuestionTimer
            key={timer}
            timeout={10000}
            onTimeout={selectedAnswer === "" ? skipSelectAnswer : null}
            mode={answerState}
          />
          <h2>{questionsText}</h2>
          <Answer
            answers={answers}
            selectedAnswer={selectedAnswer}
            answerState={answerState}
            onSelect={onSelectAnswer}
          />
        </>
      )}
    </div>
  );
}
