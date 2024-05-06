import { createSlice } from "@reduxjs/toolkit";

export const pixemaSlice = createSlice({
  name: "pixema",
  initialState: {
    
  },
  reducers:{
    increment: (state: any) => {
      state.like += 1
    },
    decrement: (state: any) => {
      state.dislike += 1
    },
  }
})

export const { increment, decrement} = pixemaSlice.actions;


export default pixemaSlice.reducer;