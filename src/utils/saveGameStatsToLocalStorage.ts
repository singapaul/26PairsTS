import {
  LOCAL_STORAGE_KEY_NAME_DAILY,
  LOCAL_STORAGE_KEY_NAME_CLASSIC,
  LOCAL_STORAGE_KEY_NAME_LITE,
} from "@/settings";

type gameDataObjectType = {
  time: string;
  turns: string;
  score: string;
  date: string;
};

type gameDataObjectArrayType = gameDataObjectType[];

export const saveGameStatsToLocalStorage = ({
  gameMode,
  score,
  time,
  turns,
}: {
  gameMode:
    | typeof LOCAL_STORAGE_KEY_NAME_DAILY
    | typeof LOCAL_STORAGE_KEY_NAME_CLASSIC
    | typeof LOCAL_STORAGE_KEY_NAME_LITE;
  score: number;
  time: number;
  turns: number;
}) => {
  if (typeof window !== "undefined") {
    // No previous existing value in local storage
    const today = new Date();
    if (localStorage.getItem(gameMode) == null) {
      const gameDataObject: gameDataObjectArrayType = [
        {
          time: time.toString(),
          turns: (turns).toString(),
          score: score.toString(),
          date: today.toString(),
        },
      ];

      localStorage.setItem(gameMode, JSON.stringify(gameDataObject));
    } else {
      const currentScoreArray = localStorage.getItem(gameMode);

      const gameDataObject: gameDataObjectType = {
        time: time.toString(),
        turns: (turns + 1).toString(),
        score: score.toString(),
        date: today.toString(),
      };

      if (currentScoreArray !== null) {
        const valT = JSON.parse(currentScoreArray);
        valT.push(gameDataObject);
        const updatedArray = JSON.stringify(valT);

        localStorage.setItem(gameMode, updatedArray);
      }
    }
  }
};
