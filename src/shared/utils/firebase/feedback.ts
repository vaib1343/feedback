import { db, app } from "@/shared/config/firebaseConfig";
import { Feedback } from "@/shared/types/feedback.types";
import {
    addDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    orderBy,
    Query,
    DocumentData,
    updateDoc,
    doc,
    getDoc,
    deleteDoc,
    where,
} from "firebase/firestore";

export const getFeedback = async (id: string) => {
    const collRef = doc(db, "feedbacks", id);
    const response = await getDoc(collRef);
    return { ...response.data(), id: response.id };
};

export const getFeedbacks = async (q: {
    category: string | null;
}): Promise<Feedback[]> => {
    const feedbacks: Feedback[] = [];
    let queryDoc;
    const collRef = collection(db, "feedbacks");
    if (q.category != null && q.category !== "all") {
        queryDoc = query(collRef, where("category", "==", q.category));
    } else {
        queryDoc = query(collRef);
    }
    const response = await getDocs(queryDoc);
    response.docs.map((doc) => {
        feedbacks.push({ ...doc.data(), id: doc.id } as Feedback);
    });
    return feedbacks;
};

export const addFeedback = async (payload: {
    title: string;
    details: string;
    category: string;
}) => {
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

export const updateFeedback = async (payload: Feedback) => {
    try {
        const { id, vote, comments, title, details, category, updateStatus } =
            payload;
        console.log(id);
        const collRef = doc(db, "feedbacks", id);
        return await updateDoc(collRef, {
            title,
            category,
            details,
            updateStatus,
            comments,
            vote,
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteFeedback = async (id: string) => {
    const docRef = doc(db, "feedbacks", id);
    return await deleteDoc(docRef);
};
