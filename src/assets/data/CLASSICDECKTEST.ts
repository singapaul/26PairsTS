import BACK from "../../assets/ClassicDeck/BACK.png";
import CLUBA from "../../assets/ClassicDeck/CLUB-A.png";
import CLUBK from "../../assets/ClassicDeck/CLUB-K.png";
import CLUBQ from "../../assets/ClassicDeck/CLUB-Q.png";
import DIAMONDA from "../../assets/ClassicDeck/DIAMOND-A.png";
import DIAMONDK from "../../assets/ClassicDeck/DIAMOND-K.png";
import DIAMONDQ from "../../assets/ClassicDeck/DIAMOND-Q.png";
import HEARTA from "../../assets/ClassicDeck/HEART-A.png";
import HEARTK from "../../assets/ClassicDeck/HEART-K.png";
import HEARTQ from "../../assets/ClassicDeck/HEART-Q.png";
import SPADEA from "../../assets/ClassicDeck/SPADE-A.png";
import SPADEK from "../../assets/ClassicDeck/SPADE-K.png";
import SPADEQ from "../../assets/ClassicDeck/SPADE-Q.png";

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
