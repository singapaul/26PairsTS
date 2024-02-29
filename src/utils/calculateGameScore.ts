export const calculateGameScore = (timeInSeconds: number, turns: number, cardCount: number): number => {
  // Constants
  const baseScore = 10000; // Starting score before adjustments
  const timePenaltyRate = 5; // Points subtracted per second
  const turnPenaltyRate = 20; // Points subtracted per turn
  const difficultyMultiplier = cardCount/ 24; 
   // Calculate penalties
   const timePenalty = timeInSeconds * timePenaltyRate;
   const turnPenalty = turns * turnPenaltyRate;
   // Calculate final score
   let score = (baseScore - timePenalty - turnPenalty) * difficultyMultiplier;
   // Ensure score is not negative
   score = Math.max(score, 0);

   return score;
} 



