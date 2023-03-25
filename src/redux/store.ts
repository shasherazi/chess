import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './board/boardSlice';
import chessSlice from './chess/chessSlice';

const store = configureStore({
  reducer: {
    board: boardSlice,
    chess: chessSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
