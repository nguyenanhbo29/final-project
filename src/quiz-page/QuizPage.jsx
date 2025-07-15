import { useState } from "react";
import QuizOverView from "./components/QuizOverView";
import QuizDetail from "./components/QuizDetail";

export default function QuizPage() {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <>
      {startQuiz ? (
        <QuizDetail />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <QuizOverView setStartQuiz={setStartQuiz} />
        </div>
      )}
    </>
  );
}
