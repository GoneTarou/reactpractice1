export const Question = (props) => {
  const { question, currentQuestionIndex, totalQuestions, onAnswer } = props;
  return (
    <div>
      <h2>{question.text}</h2>
    </div>
  );
};