export const ResultPage = (props) => {
  const { answers, onRestart } = props;

  return (
    <>
      <h2>診断結果</h2>
      <div>
        <h3>あなたの回答</h3>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>
              質問{index + 1}: {answer.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};