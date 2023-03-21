import React from 'react';
import styles from '../styles/ChessSquare.module.css';

interface ChessSquareProps {
    id: string;
    color: string;
    piece: string | undefined;
    pieceColor: string | undefined;
}

export default function ChessSquare(
  {
    id, color, piece, pieceColor,
  }: ChessSquareProps,
): React.ReactElement {
  const pieceNotation = pieceColor === 'w' ? piece?.toUpperCase() : piece?.toLowerCase();
  return (
    <div
      className={`${styles.square} ${styles[color]}`}
      id={id}
    >
      {
        piece && (
        <img className={styles.piece} src={`src/assets/images/pieces/${pieceNotation}.svg`} alt={`${pieceColor} ${piece}`} />
        )
      }
    </div>
  );
}
