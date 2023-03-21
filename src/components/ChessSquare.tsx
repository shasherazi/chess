import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/ChessSquare.module.css';
import { ChessSquareProps } from '../types/ChessSquareProps';
import { RootState } from '../redux/store';
import { selectPiece, possibleMoves } from '../redux/board/boardSlice';

export default function ChessSquare(
  {
    id, color, piece, pieceColor,
  }: ChessSquareProps,
): React.ReactElement {
  const dispatch = useDispatch();
  const pieceNotation = pieceColor === 'w' ? piece?.toUpperCase() : piece?.toLowerCase();
  const selectedPiece = useSelector((state: RootState) => state.board.selectedPiece);
  const possibleMovesArray = useSelector((state: RootState) => state.board.possibleMoves);

  return (
    <button
      className={`${styles.square}
      ${styles[color]}
      ${selectedPiece === id ? styles.selected : ''}
      ${possibleMovesArray.includes(id) ? styles.possibleMove : ''}
      `}
      id={id}
      onClick={() => {
        dispatch(selectPiece(id));
        dispatch(possibleMoves());
      }}
      type="button"
    >
      {
        piece && (
        <img
          className={styles.piece}
          src={`src/assets/images/pieces/${pieceNotation}.svg`}
          alt={`${pieceColor} ${piece}`}
        />
        )
      }
    </button>
  );
}
