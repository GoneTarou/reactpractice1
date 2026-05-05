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
      // スコア計算 → 結果判定
      const finalResult = determineResult(newAnswers);

      console.log('回答:', newAnswers);
      console.log('判定結果:', finalResult);

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