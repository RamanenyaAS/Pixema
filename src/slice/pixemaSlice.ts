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

export const fetchOneMovie = createAsyncThunk(
  'pixema/fetchOneMovie',
  async function (id: string, { rejectWithValue }) {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${movieKey}&i=${id}`);
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
// https://www.omdbapi.com/?apikey=113df6aa&i=tt2404311

export const searchResult = createAsyncThunk(
  'pixema/fetchSearchResult',
  async function ({text,page}: {text: string, page: number}, { rejectWithValue }) {
    try {
      const responce = await fetch(`https://www.omdbapi.com/?apikey=${movieKey}&s=${text}&page=${page}`);
      if (!responce.ok) {
        throw new Error("ERROR")
      }
      const data = await responce.json();
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
    oneMovie: [],
    favorites: [],
    status: null,
    error: null,
    searchResultMovies: null
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
        state.movies = payload.Search;
      }),
      builder.addCase(fetchMovies.rejected, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      }),
      builder.addCase(fetchOneMovie.pending, (state: IInitialState) => {
        state.status = "pending";
        state.error = null;
      }),
      builder.addCase(fetchOneMovie.fulfilled, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "fulfilled";
        state.oneMovie = payload;
      }),
      builder.addCase(fetchOneMovie.rejected, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      }),
      builder.addCase(searchResult.pending, (state: IInitialState) => {
        state.status = "pending";
        state.error = null;
      }),
      builder.addCase(searchResult.fulfilled, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "fulfilled";
        state.searchResultMovies = payload;
        console.log(payload);
      }),
      builder.addCase(searchResult.rejected, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      })
  },
})

export const { addToFavorite } = pixemaSlice.actions;


export default pixemaSlice.reducer;