import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/ChessSquare.module.css';
import { ChessSquareProps } from '../types/ChessSquareProps';
import { RootState } from '../redux/store';
import { selectPiece } from '../redux/board/boardSlice';

export default function ChessSquare(
  {
    id, color, piece, pieceColor,
  }: ChessSquareProps,
): React.ReactElement {
  const dispatch = useDispatch();
  const pieceNotation = pieceColor === 'w' ? piece?.toUpperCase() : piece?.toLowerCase();
  const selectedPiece = useSelector((state: RootState) => state.board.selectedPiece);
  //   console.log(selectedPiece, id);

  return (
    <button
      className={`${styles.square} ${styles[color]} ${selectedPiece === id ? styles.selected : ''}`}
      id={id}
      onClick={() => dispatch(selectPiece(id))}
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
