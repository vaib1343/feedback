import { configureStore } from "@reduxjs/toolkit";
import FeedbackReducer from "./feedbackSlice";
import AuthReducer from './authSlice';
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        feedback: FeedbackReducer,
        auth: AuthReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
