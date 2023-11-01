import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Feedback } from "@/shared/types/feedback.types";
import {
    getFeedbacks,
    updateFeedback,
    getFeedback,
    addFeedback,
    deleteFeedback,
} from "../utils/firebase/feedback";
import { sortFeedback } from "../utils/feedbackUtils";

export interface FeedbackState {
    status: "loading" | "idle";
    feedbacks: Feedback[];
    feedback: Feedback;
    error: null | Error;
}

const initialState: FeedbackState = {
    status: "loading",
    feedback: {} as Feedback,
    feedbacks: [],
    error: null,
};

export const fetchFeedbacksThunk = createAsyncThunk(
    "feedbacks/fetch",
    async (
        q?: { category: string | null; sortBy: string | null } | undefined
    ) => {
        const response = await getFeedbacks({ category: q?.category || null });
        return sortFeedback(response, q?.sortBy || null);
    }
);

export const fetchFeedbackThunk = createAsyncThunk(
    "feedback/fetch",
    async (id: string) => {
        console.log(id);
        const resposne = await getFeedback(id);
        return resposne;
    }
);

export const createFeedbackThunk = createAsyncThunk(
    "feedback/create",
    async (payload: {
        title: string;
        details: string;
        category: string;
        userId: string;
    }) => {
        const response = await addFeedback(payload);
        return response;
    }
);

export const updateFeedbackThunk = createAsyncThunk(
    "feedback/update",
    async (payload: Feedback) => {
        const response = await updateFeedback(payload);
        return response;
    }
);

export const deleteFeedbackThunk = createAsyncThunk(
    "feedback/delete",
    async (id: string) => {
        const response = await deleteFeedback(id);
        return response;
    }
);

export const feedBacksSlice = createSlice({
    name: "feedbacks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFeedbacksThunk.pending, (state, payload) => {
            state.status = "loading";
            state.error = null;
        });

        builder.addCase(fetchFeedbacksThunk.fulfilled, (state, { payload }) => {
            state.feedbacks = [...payload];
            state.status = "idle";
        });

        builder.addCase(fetchFeedbacksThunk.rejected, (state, { payload }) => {
            console.log({ payload });
            state.status = "idle";
        });
        builder.addCase(fetchFeedbackThunk.pending, (state, { payload }) => {
            state.status = "loading";
        });
        builder.addCase(fetchFeedbackThunk.fulfilled, (state, { payload }) => {
            state.status = "idle";
            state.feedback = payload as Feedback;
        });
        builder.addCase(fetchFeedbackThunk.rejected, (state) => {
            state.status = "idle";
        });

        builder.addCase(createFeedbackThunk.pending, (state) => {
            state.status = "loading";
        });

        builder.addCase(createFeedbackThunk.fulfilled, (state) => {
            state.status = "idle";
        });

        builder.addCase(createFeedbackThunk.rejected, (state) => {
            state.status = "idle";
        });

        builder.addCase(updateFeedbackThunk.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(updateFeedbackThunk.fulfilled, (state) => {
            state.status = "idle";
        });

        builder.addCase(deleteFeedbackThunk.pending, (state) => {
            state.status = "loading";
        });

        builder.addCase(deleteFeedbackThunk.fulfilled, (state) => {
            state.status = "idle";
        });

        builder.addCase(deleteFeedbackThunk.rejected, (state) => {
            state.status = "idle";
        });
    },
});

export default feedBacksSlice.reducer;
