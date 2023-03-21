import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BoardState } from '../types/BoardState';
import styles from '../styles/Board.module.css';
import ChessSquare from './ChessSquare';

export default function Board() {
  const { board } = useSelector((state: {board: BoardState}) => state.board);

  useEffect(() => {
    console.log(board);
  }, [board]);

  let pos = 0;

  return (
    <div className={styles.board}>
      <div className={styles.chessBoard}>
        {/* create a chess board using 1-8 a-h coordinates */}
        {
        Array.from(Array(8).keys()).map((row) => Array.from(Array(8).keys()).map((col) => {
          const id = `${String.fromCharCode(97 + col)}${8 - row}`;
          const color = (row + col) % 2 === 0 ? 'white' : 'black';
          const piece = board[pos]?.type;
          const pieceColor = board[pos]?.color;
          pos += 1;
          return (
            <ChessSquare
              id={id}
              color={color}
              key={id}
              piece={piece}
              pieceColor={pieceColor}
            />
          );
        }))
}
      </div>
    </div>
  );
}
