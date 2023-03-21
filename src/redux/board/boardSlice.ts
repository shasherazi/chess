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
  },
});

export const { selectPiece } = boardSlice.actions;
export const { possibleMoves } = boardSlice.actions;

export default boardSlice.reducer;
