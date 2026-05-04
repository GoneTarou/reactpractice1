import { Question } from "../data/question";

export const QuestionWord = (props) => {
  const { question, currentQuestionIndex, totalQuestions, onAnswer } = props;
  return (
    <div className="min-h-screen bg-orange-50 py-8 px-4">
      {/* <Progress
        current={currentQuestionIndex + 1}
        total={totalQuestions}
      /> */}
      <div>
        <h1>{question.text}</h1>
      </div>
    </div>
  );
};