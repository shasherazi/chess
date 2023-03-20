import React from 'react';
import styles from '../styles/ChessSquare.module.css';

interface ChessSquareProps {
    id: string;
    color: string;
}

export default function ChessSquare(
  { id, color }: ChessSquareProps,
): React.ReactElement {
  return (
    <div
      className={`${styles.square} ${styles[color]}`}
      id={id}
    />
  );
}
