import { Game } from 'js-chess-engine';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

export default boardSlice.reducer;
