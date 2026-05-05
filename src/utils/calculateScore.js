export const calculateScore = (answers) => {
  const scores = {};

  // 各回答の value をカウント
  answers.forEach((answer) => {
    const value = answer.value;
    scores[value] = (scores[value] || 0) + 1;
  });

  return scores;
};