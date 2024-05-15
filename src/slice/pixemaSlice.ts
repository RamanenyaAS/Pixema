import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzY1M2M1ZmMwM2JlM2RiMGRhZjY1YjEyYzYyMzRiOSIsInN1YiI6IjY2MmZmYmE5YTgwNjczMDEyOGU5ODdhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zWGVn74TYLun9VrPNjfhgY1wtpY8Smy9o7AJi8SvumI'
  }
};

export const fetchBlog = createAsyncThunk(
  'pixema/fetchBlog',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", options);
      if (!response.ok) {
        throw new Error("ERROR")
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
    posts: [],
    favorites: [],
    status: null,
    error: null,
  },
  reducers: {
    addToFavorite: (state: any, { payload }) => {
      const isAlreadyAdded = state.favorites.some((item: any) => item.id === payload.id);
      if (isAlreadyAdded) {
        alert("Фильм уже добавлен в избранное");
        return;
      }
      state.favorites = [...state.favorites, payload]
      alert("Фильм успешно добавлен в избранное")
    }
  },
  extraReducers: (builder) => {
    return builder.addCase(fetchBlog.pending, (state: any) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(fetchBlog.fulfilled, (state: any, { payload }: { payload: any }) => {
        state.status = "fulfilled";
        state.posts = payload.results;
        console.log(state.posts)
      }),
      builder.addCase(fetchBlog.rejected, (state: any, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      })
  },
})

export const { addToFavorite } = pixemaSlice.actions;


export default pixemaSlice.reducer;