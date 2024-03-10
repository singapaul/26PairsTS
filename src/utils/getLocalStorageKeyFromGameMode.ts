import {
  LOCAL_STORAGE_KEY_NAME_CLASSIC,
  LOCAL_STORAGE_KEY_NAME_DAILY,
  LOCAL_STORAGE_KEY_NAME_LITE,
} from "@/settings";
import { CLASSIC_SHUFFLE, DAILY_SHUFFLE, LITE_SHUFFLE } from "@/settings";

// Define the function to accept a gameMode parameter
export const getLocalStorageKeyFromGameMode = (gameMode: string)  => {
  // Match the gameMode with its corresponding local storage key
  switch (gameMode) {
    case CLASSIC_SHUFFLE:
      return LOCAL_STORAGE_KEY_NAME_CLASSIC;
    case DAILY_SHUFFLE:
      return LOCAL_STORAGE_KEY_NAME_DAILY;
    case LITE_SHUFFLE:
      return LOCAL_STORAGE_KEY_NAME_LITE;
    default:
      // Handle case where the gameMode does not match any known type
      return LOCAL_STORAGE_KEY_NAME_DAILY;
  }
};
