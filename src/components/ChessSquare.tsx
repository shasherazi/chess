import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/ChessSquare.module.css';
import { ChessSquareProps } from '../types/ChessSquareProps';
import { PieceImages } from '../types/PieceImages';
import { RootState } from '../redux/store';
import { selectPiece, possibleMoves, movePiece } from '../redux/board/boardSlice';
import p from '../assets/images/pieces/p.svg';
import P from '../assets/images/pieces/P.svg';
import r from '../assets/images/pieces/r.svg';
import R from '../assets/images/pieces/R.svg';
import n from '../assets/images/pieces/n.svg';
import N from '../assets/images/pieces/N.svg';
import b from '../assets/images/pieces/b.svg';
import B from '../assets/images/pieces/B.svg';
import q from '../assets/images/pieces/q.svg';
import Q from '../assets/images/pieces/Q.svg';
import k from '../assets/images/pieces/k.svg';
import K from '../assets/images/pieces/K.svg';

export default function ChessSquare(
  {
    id, color, piece, pieceColor,
  }: ChessSquareProps,
): React.ReactElement {
  const dispatch = useDispatch();
  const pieceNotation = pieceColor === 'w' ? piece?.toUpperCase() : piece?.toLowerCase();
  const selectedPiece = useSelector((state: RootState) => state.board.selectedPiece);
  const possibleMovesArray = useSelector((state: RootState) => state.board.possibleMoves);
  const pieceImages: PieceImages = {
    p: p as string,
    P: P as string,
    r: r as string,
    R: R as string,
    n: n as string,
    N: N as string,
    b: b as string,
    B: B as string,
    q: q as string,
    Q: Q as string,
    k: k as string,
    K: K as string,
  };

  return (
    <button
      className={`${styles.square}
      ${styles[color]}
      ${selectedPiece === id ? styles.selected : ''}
      ${possibleMovesArray.includes(id) ? styles.possibleMove : ''}
      `}
      id={id}
      onClick={() => {
        if (selectedPiece && possibleMovesArray.includes(id)) {
          dispatch(movePiece(id));
        }
        dispatch(selectPiece(id));
        dispatch(possibleMoves());
      }}
      type="button"
    >
      {
        piece && (
        <img
          className={styles.piece}
          src={pieceImages[pieceNotation as string]}
          alt={`${pieceColor} ${piece}`}
        />
        )
      }
    </button>
  );
}
