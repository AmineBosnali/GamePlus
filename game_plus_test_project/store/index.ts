import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook,useSelector } from "react-redux";
import gameSlice from "../features/gameSlice";

const store= configureStore({
    reducer:{
         game:gameSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDistpatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector; 