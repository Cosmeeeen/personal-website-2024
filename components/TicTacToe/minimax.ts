'use client';

import { TBoard, TPlayer } from './types';
import { checkWinner } from './utils';

const getBoardScore = (
  board: TBoard,
  depth: number = 0,
  maxingPlayer: string = 'X'
): number => {
  const winner = checkWinner(board);

  if (winner === maxingPlayer) {
    return 10 - depth;
  }

  if (winner === 'draw') {
    return 0;
  }

  return -10 + depth;
};

const minimax = (
  board: TBoard,
  depth: number,
  isMaxing: boolean,
  maxingPlayer: TPlayer = 'X'
): number => {
  if (checkWinner(board)) {
    return getBoardScore(board, depth, maxingPlayer);
  }

  // Maxing player
  if (isMaxing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = maxingPlayer;
        const score = minimax(board, depth + 1, false, maxingPlayer);
        board[i] = null;
        bestScore = Math.max(bestScore, score);
      }
    }
    return bestScore;
  }

  // Minimizing player
  let bestScore = Infinity;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = maxingPlayer === 'X' ? '0' : 'X';
      const score = minimax(board, depth + 1, true, maxingPlayer);
      board[i] = null;
      bestScore = Math.min(bestScore, score);
    }
  }
  return bestScore;
};

const findBestMove = (board: TBoard, maxingPlayer: TPlayer = 'X'): number => {
  let bestMove = -1;
  let bestScore = -Infinity;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = maxingPlayer;
      const score = minimax(board, 0, false, maxingPlayer);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
};

export { findBestMove };
