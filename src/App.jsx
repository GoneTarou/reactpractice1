import { useState } from "react";
import { StartPage } from "./components/StartPage";
import { Question } from "./components/Question";
import { ResultPage } from "./components/ResultPage";
import { questions } from "./data/question";
import { determineResult } from "./utils/determineResult";

export const App = () => {
  const [step, setStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers, selectedOption];

    const isLastQuestion =
      currentQuestionIndex === questions.length - 1;

    setAnswers(newAnswers);

    if (isLastQuestion) {
      const finalResult = determineResult(newAnswers);

      setResult(finalResult);
      setStep(2);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
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

      {step === 2 && result && (
        <ResultPage
          result={result}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};