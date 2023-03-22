import { Chess } from 'chess.js';
import { createSlice } from '@reduxjs/toolkit';
import { BoardState } from '../../types/BoardState';

const chess = new Chess();

const initialState: BoardState = {
  chessBoard: chess.board().flat(),
  selectedPiece: null,
  possibleMoves: [],
  isCheckMate: false,
  turn: 'w',
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    selectPiece: (state:BoardState, action) => ({ ...state, selectedPiece: action.payload }),

    possibleMoves: (state:BoardState) => {
      const { selectedPiece } = state;
      if (selectedPiece) {
        const moves = chess.moves({ square: selectedPiece }).map((move) => {
          if (move.slice(-1) === '+' || move.slice(-1) === '#') return move.slice(-3, -1);
          return move.slice(-2);
        });
        return { ...state, possibleMoves: moves };
      }
      return state;
    },

    movePiece: (state:BoardState, action) => {
      const { selectedPiece } = state;
      if (selectedPiece) {
        const move = chess.move({ from: selectedPiece, to: action.payload });
        if (move) {
          const newBoard = chess.board().flat();
          const newSelectedPiece = move.to;
          const moves = chess.moves({ square: selectedPiece }).map((m) => {
            if (m.slice(-1) === '+' || m.slice(-1) === '#') return m.slice(-3, -1);
            return m.slice(-2);
          });
          const isCheckMate = chess.isCheckmate();
          const turn = chess.turn();
          return {
            ...state,
            chessBoard: newBoard,
            selectedPiece: newSelectedPiece,
            possibleMoves: moves,
            isCheckMate,
            turn,
          };
        }
      }
      return state;
    },
    resetGame: () => initialState,
  },
});

export const {
  selectPiece,
  possibleMoves,
  movePiece,
  resetGame,
} = boardSlice.actions;

export default boardSlice.reducer;
