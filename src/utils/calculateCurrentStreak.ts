import { differenceInDays } from 'date-fns';

type GameData = {
  time: string;
  turns: string;
  score: string;
  date: string;
};

export const calculateCurrentStreak = (games: GameData[]): number => {
  if (games.length === 0) return 0;

  const today = new Date(); // Today's date

  // Convert dates to Date objects and sort by date
  const sortedGames = games
    .map((game) => ({
      ...game,
      date: new Date(game.date),
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  // Check if the most recent game is yesterday or today
  const mostRecentGame = sortedGames[sortedGames.length - 1].date;
  const diffWithToday = differenceInDays(today, mostRecentGame);

  if (diffWithToday > 1) {
    // No streak if the most recent game was played more than one day ago
    return 0;
  }

  let currentStreak = 1; // At least one day in the current streak

  // Iterate backward through the sorted games to calculate the current streak
  for (let i = sortedGames.length - 1; i > 0; i--) {
    const currentDate = sortedGames[i].date;
    const previousDate = sortedGames[i - 1].date;

    const dayDifference = differenceInDays(currentDate, previousDate);

    if (dayDifference === 1) {
      currentStreak++; // Extend the streak
    } else {
      break; // Break the loop if the gap is more than one day
    }
  }

  return currentStreak;
};

 