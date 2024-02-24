import BACK from "../../assets/ClassicDeck/BACK.png";

import CLUBQ from "../../assets/ClassicDeck/CLUB-Q.png";
import CLUBK from "../../assets/ClassicDeck/CLUB-K.png";
import CLUBA from "../../assets/ClassicDeck/CLUB-A.png";

import DIAMONDQ from "../../assets/ClassicDeck/DIAMOND-Q.png";
import DIAMONDK from "../../assets/ClassicDeck/DIAMOND-K.png";
import DIAMONDA from "../../assets/ClassicDeck/DIAMOND-A.png";

import HEARTQ from "../../assets/ClassicDeck/HEART-Q.png";
import HEARTK from "../../assets/ClassicDeck/HEART-K.png";
import HEARTA from "../../assets/ClassicDeck/HEART-A.png";

import SPADEQ from "../../assets/ClassicDeck/SPADE-Q.png";
import SPADEK from "../../assets/ClassicDeck/SPADE-K.png";
import SPADEA from "../../assets/ClassicDeck/SPADE-A.png";

export const CLASSICDECKTEST = {
  cards: [
    // CLUB
    {
      name: "CLUB Q",
      src: CLUBQ,
      matchID: "BLACKQ",
    },

    // SPADE
    {
      name: "SPADE Q",
      src: SPADEQ,
      matchID: "BLACKQ",
    },

    // DIAMONDS
    {
      name: "DIAMOND Q",
      src: DIAMONDQ,
      matchID: "REDQ",
    },

    // HEARTS

    {
      name: "HEART Q",
      src: HEARTQ,
      matchID: "REDQ",
    },
  ],
  cover: {
    name: "cover",
    src: BACK,
  },
};
