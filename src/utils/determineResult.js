import { results } from '../data/results';

export const determineResult = (answers) => {
  const counts = {};

  answers.forEach((a) => {
    counts[a.type] = (counts[a.type] || 0) + 1;
  });

  let maxType = null;
  let maxCount = 0;

  for (const type in counts) {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      maxType = type;
    }
  }

  // 👇ここが重要
  return results.find(r => r.type === maxType);
};