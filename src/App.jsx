import { useState } from "react";
import { StartPage } from "./components/StartPage";
import { Question } from "./components/Question";
import { questions } from "./data/question";
import { ResultPage } from "./components/ResultPage";

export const App = () => {
  const [step, setStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers, selectedOption];

    const isLastQuestion =
      currentQuestionIndex === questions.length - 1;

    setAnswers(newAnswers);

    if (isLastQuestion) {
      setStep(2);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="p-4 m-2">
      {step === 0 && <StartPage onStart={() => setStep(1)} />}

      {step === 1 && (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};