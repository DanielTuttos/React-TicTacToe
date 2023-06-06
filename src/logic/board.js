import { WINNER_COMBOS } from "../constants/constants";

export const checktWinnerFrom = (boardToCheck) => {
    // revisar combinaciones ganadoras para ver si x u o gano
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };