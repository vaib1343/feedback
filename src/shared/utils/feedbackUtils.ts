import { Feedback } from "../types/feedback.types";

export const sortFeedback = (feedbacks: Feedback[], sortby?: string | null) => {
    if (!sortby || sortby !== "least_upvotes") {
        return feedbacks.sort((a, b) => b.vote - a.vote);
    } else {
        return feedbacks.sort((a, b) => a.vote - b.vote);
    }
};
