import { createSlice } from "@reduxjs/toolkit";

export const pixemaSlice = createSlice({
  name: "pixema",
  initialState: {
    favorites: [],
  },
  reducers:{
    addToFavorite: (state: any, {payload}) => {
      const isAlreadyAdded = state.favorites.some((item: any) => item.id === payload.id);
      if (isAlreadyAdded){
        alert("Фильм уже добавлен в избранное");
        return;
      }
      state.favorites = [...state.favorites, payload]
      alert("Фильм успешно добавлен в избранное")
    }
  }
})

export const { addToFavorite} = pixemaSlice.actions;


export default pixemaSlice.reducer;