import { results } from '../data/results';

export const determineResult = (answers) => {
  const counts = {};

  answers.forEach((a) => {
    counts[a.type] = (counts[a.type] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(counts));

  const topTypes = Object.keys(counts).filter(
    (type) => counts[type] === maxCount
  );

  const selectedType =
    topTypes[Math.floor(Math.random() * topTypes.length)];

  return results.find((r) => r.type === selectedType);
};