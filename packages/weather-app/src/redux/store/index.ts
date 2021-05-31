import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "../slices/searchSlice";
import notgificationReducer from "../slices/notificationSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        search: searchReducer,
        notification: notgificationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
