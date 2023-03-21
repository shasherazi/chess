import { Chess } from 'chess.js';
import { createSlice } from '@reduxjs/toolkit';
import { BoardState } from '../../types/BoardState';

const initialState: BoardState = {
  chessBoard: new Chess().board().flat(),
  selectedPiece: null,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    selectPiece: (state:BoardState, action) => ({ ...state, selectedPiece: action.payload }),
  },
});

export const { selectPiece } = boardSlice.actions;

export default boardSlice.reducer;
