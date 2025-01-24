"use client";

import React, { useContext } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';
import { DragDropContext } from '@/app/context/DragDropContext';

const ChessboardComponent = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState('start');
  const { dragState, setDragState } = useContext(DragDropContext);

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for simplicity
    });

    if (move === null) return; // illegal move

    setFen(game.fen());
    setTimeout(makeBotMove, 500); // Bot moves after 500ms
  };

  const makeBotMove = () => {
    const moves = game.moves();
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    game.move(randomMove);
    setFen(game.fen());
  };

  return (
    <div>
      <Chessboard width={400} position={fen} onDrop={onDrop} />
    </div>
  );
};

export default ChessboardComponent;