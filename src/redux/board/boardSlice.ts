import { Chess } from 'chess.js';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: new Chess().board(),
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

export default boardSlice.reducer;
