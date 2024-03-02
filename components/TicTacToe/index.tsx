"use client";
import * as React from "react";

import { Button } from "../ui/button";
import { checkWinner, getCellIcon } from "./utils";
import { ArrowLeft } from "react-feather";
import SettingsButton from "./SettingsButton";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [turn, setTurn] = React.useState<"X" | "0">("X");
  const [playing, setPlaying] = React.useState(true);
  const [xScore, setXScore] = React.useState(0);
  const [oScore, setOScore] = React.useState(0);

  const handleCellClick = React.useCallback(
    (index: number) => {
      if (board[index] !== null) return;
      if (!playing) return;

      const copy = [...board];
      copy[index] = turn;
      setTurn(turn === "X" ? "0" : "X");
      setBoard(copy);
    },
    [board, turn, playing],
  );

  const resetScores = () => {
    setXScore(0);
    setOScore(0);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setPlaying(true);
  };

  React.useEffect(() => {
    if (!playing) return;

    const winner = checkWinner(board);
    if (winner === "X") {
      setXScore(xScore + 1);
      setPlaying(false);
    } else if (winner === "0") {
      setOScore(oScore + 1);
      setPlaying(false);
    } else if (winner === "draw") {
      setPlaying(false);
    }
  }, [board, xScore, oScore, playing]);

  return (
    <div className="mx-auto w-fit">
      <div className="my-3 flex h-8 items-center justify-around">
        <p>X - {xScore}</p>
        <div>
          {playing ? (
            <ArrowLeft
              className="transition-transform"
              style={{
                transform: `rotate(${turn === "X" ? "0" : "180deg"})`,
              }}
            />
          ) : (
            <SettingsButton onResetScores={resetScores} />
          )}
        </div>
        <p>0 - {oScore}</p>
      </div>
      <div className="mx-auto grid w-fit grid-cols-3 grid-rows-3 gap-2">
        {board.map((cell, index) => (
          <Button
            key={index}
            onClick={() => handleCellClick(index)}
            variant="outline"
            size="icon"
            className="h-20 w-20"
          >
            {getCellIcon(cell)}
          </Button>
        ))}
      </div>
      <Button
        onClick={resetGame}
        variant="outline"
        size="lg"
        className="mt-2 w-full"
      >
        Reset
      </Button>
    </div>
  );
};

export default TicTacToe;
