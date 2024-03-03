import { Circle, X } from "react-feather";

import { TBoard } from "./types";

const checkWinner = (board: TBoard) => {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if (
      board[i] === board[i + 3] &&
      board[i] === board[i + 6] &&
      board[i] !== null
    ) {
      return board[i];
    }
    if (
      board[i * 3] === board[i * 3 + 1] &&
      board[i * 3] === board[i * 3 + 2] &&
      board[i * 3] !== null
    ) {
      return board[i * 3];
    }
  }
  // Check diagonals
  if (board[0] === board[4] && board[0] === board[8] && board[0] !== null) {
    return board[0];
  }
  if (board[2] === board[4] && board[2] === board[6] && board[2] !== null) {
    return board[2];
  }
  // Check for draw
  if (!board.includes(null)) {
    return "draw";
  }
};

const getCellIcon = (cell: "X" | "0" | null) => {
  switch (cell) {
    case "X":
      return <X size="4em" />;
    case "0":
      return <Circle size="4em" />;
    default:
      return null;
  }
};

export { checkWinner, getCellIcon };
