import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitialState, IMovie } from "../types/interfaces";

const movieKey = "a705d9d9";

export const fetchMovies = createAsyncThunk(
  'pixema/fetchMovies',
  async function ({ filmTitle, page }: { filmTitle: string, page: number }, { rejectWithValue }) {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${movieKey}&s=${filmTitle}&page=${page}`);
      if (!response.ok) {
        throw new Error("Something went wrong")
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

export const pixemaSlice = createSlice({
  name: "pixema",
  initialState: {
    movies: [],
    favorites: [],
    status: null,
    error: null,
  },
  reducers: {
    addToFavorite: (state: IInitialState, { payload }) => {
      const isAlreadyAdded = state.favorites.some((item: IMovie) => item.id === payload.id);
      if (isAlreadyAdded) {
        alert("Фильм уже добавлен в избранное");
        return;
      }
      state.favorites = [...state.favorites, payload]
      alert("Фильм успешно добавлен в избранное")
    }
  },
  extraReducers: (builder) => {
    return builder.addCase(fetchMovies.pending, (state: IInitialState) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(fetchMovies.fulfilled, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "fulfilled";
        console.log(payload)
        state.movies = payload.Search;
        console.log(state.movies)
      }),
      builder.addCase(fetchMovies.rejected, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      })
  },
})

export const { addToFavorite } = pixemaSlice.actions;


export default pixemaSlice.reducer;