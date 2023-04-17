import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, Unsubscribe } from "firebase/auth";
import { onAuthSubscriber } from "../utils/firebase/auth";

export interface AuthState {
    user: User;
}

const initialState: AuthState = {
    user: {} as User,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authSubscribe: (state, { payload }) => {
            state.user = payload;
        },
        logoutState: (state) => {
            state.user = {} as User;
        },
    },
});

export const { authSubscribe, logoutState } = authSlice.actions;

export default authSlice.reducer;
