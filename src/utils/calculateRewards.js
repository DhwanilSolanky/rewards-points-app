export const calculateRewardPoints = (amount) => {
  if (typeof amount !== 'number' || amount <= 0 || isNaN(amount)) return 0;
  let points = 0;
  if (amount > 100) {
    points += (amount - 100) * 2 + 50;
  } else if (amount > 50) {
    points += (amount - 50) * 1;
  }
  return Math.floor(points);
};