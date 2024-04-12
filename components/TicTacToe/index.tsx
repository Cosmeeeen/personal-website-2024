'use client';
import * as React from 'react';

import { Button } from '../ui/button';
import { checkWinner, getCellIcon } from './utils';
import SettingsButton from './SettingsButton';
import { findBestMove } from './minimax';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [turn, setTurn] = React.useState<'X' | '0'>('X');
  const [playing, setPlaying] = React.useState(true);
  const [xScore, setXScore] = React.useState(0);
  const [oScore, setOScore] = React.useState(0);

  const [isPlayingComputer, setIsPlayingComputer] = React.useState(false);

  const handleCellClick = React.useCallback(
    (index: number) => {
      if (board[index] !== null) return;
      if (!playing) return;

      if (isPlayingComputer) {
        const copy = [...board];
        copy[index] = turn;
        setBoard(copy);
        const bestMove = findBestMove(copy, turn === 'X' ? '0' : 'X');
        if (bestMove >= 0) {
          copy[bestMove] = turn === 'X' ? '0' : 'X';
          setBoard(copy);
        }
        return;
      }

      const copy = [...board];
      copy[index] = turn;
      setTurn(turn === 'X' ? '0' : 'X');
      setBoard(copy);
    },
    [board, turn, playing, isPlayingComputer]
  );

  const resetScores = () => {
    setXScore(0);
    setOScore(0);
    resetGame();
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setPlaying(true);
  };

  React.useEffect(() => {
    if (!playing) return;

    const winner = checkWinner(board);
    if (winner === 'X') {
      setXScore(xScore + 1);
      setPlaying(false);
    } else if (winner === '0') {
      setOScore(oScore + 1);
      setPlaying(false);
    } else if (winner === 'draw') {
      setPlaying(false);
    }
  }, [board, xScore, oScore, playing]);

  return (
    <div className='mx-auto w-fit'>
      <div className='my-3 flex h-8 items-center justify-around'>
        <p>X - {xScore}</p>
        <div>
          <SettingsButton
            onResetScores={resetScores}
            isPlayingComputer={isPlayingComputer}
            setIsPlayingComputer={setIsPlayingComputer}
          />
        </div>
        <p>0 - {oScore}</p>
      </div>
      <div className='mx-auto grid w-fit grid-cols-3 grid-rows-3 gap-2'>
        {board.map((cell, index) => (
          <Button
            key={index}
            onClick={() => handleCellClick(index)}
            variant='outline'
            size='icon'
            className='h-20 w-20'
            disabled={!playing}
          >
            {getCellIcon(cell)}
          </Button>
        ))}
      </div>
      <Button
        onClick={resetGame}
        variant='outline'
        size='lg'
        className='mt-2 w-full'
      >
        Reset
      </Button>
    </div>
  );
};

export default TicTacToe;
