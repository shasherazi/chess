import { Chess } from 'chess.js';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chess: new Chess(),
};

export const chessSlice = createSlice({
  name: 'chess',
  initialState,
  reducers: {
    newGame() {
      return { chess: new Chess() };
    },
  },
});

export const { newGame } = chessSlice.actions;

export default chessSlice.reducer;
