import Answer from "./Answer";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  questionsText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  skipSelectAnswer,
  quizComplete
}) {
  return (
    <div id="question">
      {quizComplete ? (
        <h2>Quiz Finished</h2>
      ) : (
        <>
          <QuestionTimer
            timeout={10000}
            onTimeout={skipSelectAnswer}
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
