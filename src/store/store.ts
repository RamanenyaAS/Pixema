import { configureStore } from "@reduxjs/toolkit";
import pixemaReducer from "../slice/pixemaSlice";


const store = configureStore({
  reducer: pixemaReducer
});

export default store;