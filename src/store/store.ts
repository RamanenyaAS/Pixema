import { configureStore } from "@reduxjs/toolkit";
import pixemaReducer from "../slice/pixemaSlice";
import { useDispatch } from "react-redux";


const store = configureStore({
  reducer: pixemaReducer
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;