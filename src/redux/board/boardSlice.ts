import { Chess } from 'chess.js';
import { createSlice } from '@reduxjs/toolkit';
import { BoardState } from '../../types/BoardState';

const chess = new Chess();

const initialState: BoardState = {
  chessBoard: chess.board().flat(),
  selectedPiece: null,
  possibleMoves: [],
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    selectPiece: (state:BoardState, action) => ({ ...state, selectedPiece: action.payload }),

    possibleMoves: (state:BoardState) => {
      const { selectedPiece } = state;
      if (selectedPiece) {
        const moves = chess.moves({ square: selectedPiece }).map((move) => move.slice(-2));
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
          const moves = chess.moves({ square: newSelectedPiece }).map((m) => m.slice(-2));
          return {
            ...state,
            chessBoard: newBoard,
            selectedPiece: newSelectedPiece,
            possibleMoves: moves,
          };
        }
      }
      return state;
    },
  },
});

export const {
  selectPiece,
  possibleMoves,
  movePiece,
} = boardSlice.actions;

export default boardSlice.reducer;
