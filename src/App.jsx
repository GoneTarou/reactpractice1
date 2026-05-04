import { useState } from "react";
import { StartPage } from "./components/StartPage";
import { Question } from "./components/Question";
import { questions } from "./data/question";

export const App = () => {
  const [step, setStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    return (
      <div className="p-4 m-2">
        {step === 0 && <StartPage onStart={() => setStep(1)} />}
        {step === 1 && <Question />}
      </div>
    );
};

