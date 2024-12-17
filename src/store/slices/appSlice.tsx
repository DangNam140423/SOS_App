// src/store/slices/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu cho state
interface CounterState {
  count: number;
  route: string
}

// Khởi tạo state
const initialState: CounterState = {
  count: 0,
  route: 'home'
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // Ví dụ: thêm payload
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    setRoute: (state, action: PayloadAction<string>) => {
      state.route = action.payload
    }
  },
});

export const { increment, decrement, incrementByAmount, setRoute } = appSlice.actions;
export default appSlice.reducer;
