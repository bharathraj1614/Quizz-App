import { useQuizContext } from "../context/QuizContextProvider";

function Progress() {
  const { index, points, numQuestions, maxPossiblePoints, answer } =
    useQuizContext();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
