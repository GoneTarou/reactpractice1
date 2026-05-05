import { AnswerButton } from "./AnswerButton";


export const Question = (props) => {
  const { question, onAnswer } = props;
  console.log(question);

  if (!question) return null;

  return (
    <div className="min-h-screen bg-orange-50 py-8 px-4">
      <div>
        <h1>{question.text}</h1>
      </div>
      <div>
        {question.options.map((answer) => (
          <AnswerButton
            key={answer.text}
            text={answer.text}
            onClick={() => onAnswer(answer)}
          />
        ))}
      </div>
    </div>
  );
};