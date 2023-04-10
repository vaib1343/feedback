import { db, app } from "@/shared/config/firebaseConfig";
import { Feedback } from "@/shared/types/feedback.types";
import {
    addDoc,
    collection,
    serverTimestamp,
    getDocs,
} from "firebase/firestore";

export const addFeedback = async (payload: Feedback) => {
    const collRef = collection(db, "feedbacks");
    const { title, details, category } = payload;
    return await addDoc(collRef, {
        title,
        details,
        category,
        updateStatus: "inprogress",
        createdAt: serverTimestamp(),
        comments: [],
        vote: 0,
    });
};

export const getFeedbacks = async () => {
    const feedbacks: any[] = [];
    const collRef = collection(db, "feedbacks");
    const response = await getDocs(collRef);
    response.docs.map((doc) => {
        feedbacks.push({ ...doc.data(), id: doc.id });
    });
    return feedbacks;
};
