export interface CreateFeedback {
    category: string;
    updateStatus?: string;
    title: string;
    details: string;
}

type Comment = Array<{ userName: string; comment: string }>;

export interface Feedback {
    id: string;
    vote: number;
    comments: Comment
    category: string;
    updateStatus?: string;
    title: string;
    details: string;
    createdAt: any
}
