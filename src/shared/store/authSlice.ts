import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, Unsubscribe } from "firebase/auth";
import { onAuthSubscriber } from "../utils/firebase/auth";

export interface AuthState {
    user: User;
    status: 'loading' | 'idle'
}

const initialState: AuthState = {
    user: {} as User,
    status: 'loading',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadingState: (state) => {
            state.status = 'loading'
        },
        authSubscribe: (state, { payload }) => {
            state.user = payload;
            state.status = 'idle';
        },
        logoutState: (state) => {
            state.user = {} as User;
        },
        errorState: (state) => {
            state.status = 'idle';
        }
    },
});

export const { authSubscribe, logoutState, loadingState, errorState } = authSlice.actions;

export default authSlice.reducer;
