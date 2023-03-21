import { Chess } from 'chess.js';
import { createSlice } from '@reduxjs/toolkit';
import { BoardState } from '../../types/BoardState';

const initialState: BoardState = {
  board: new Chess().board().flat(),
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

export default boardSlice.reducer;
