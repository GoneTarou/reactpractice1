import { AnswerButton } from "./AnswerButton";

export const Question = (props) => {
  const { question, onAnswer } = props;

  if (!question) return null;

  return (
    <div className="min-h-screen bg-gray py-8 px-4">
      <div>
        <h1>{question.text}</h1>
      </div>
      <div>
        {question.options.map((option) => (
          <AnswerButton
            key={option.text}
            text={option.text}
            onClick={() => onAnswer(option)}
          />
        ))}
      </div>
    </div>
  );
};