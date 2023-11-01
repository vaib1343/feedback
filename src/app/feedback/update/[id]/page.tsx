"use client";
import React, { useState } from "react";
import { Jost } from "next/font/google";
import FeedbackForm from "@/shared/pages/feedback-form/feedback-form";
import styles from "@/app/feedback/update/[id]/update-feedback.module.scss";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import {
    fetchFeedbackThunk,
    updateFeedbackThunk,
} from "@/shared/store/feedbackSlice";
import { Feedback } from "@/shared/types/feedback.types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const jost = Jost({
    subsets: ["latin"],
});

function UpdateFeedback(props: { params: { id: string } }) {
    const [isLoading, setLoading] = useState(false);
    const { params } = props;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { user, status } = useAppSelector((state) => state.auth);

    const handleSubmit = async (payload: any) => {
        setLoading(true);
        try {
            await dispatch(updateFeedbackThunk(payload));
            await dispatch(fetchFeedbackThunk(params.id));
            router.back();
            toast.success("updated successfully");
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            if (error?.message) {
                toast.error(error?.message);
            } else {
                toast.error("update failed");
            }
        }
    };

    if (status === "loading") {
        return <p>loading</p>;
    }

    if (status === "idle" && !Object.keys(user).length) {
        router.push("/login");
        return null;
    }

    return (
        <div className={`${jost.className} ${styles.container}`}>
            <FeedbackForm
                isLoading={isLoading}
                type="update"
                handleSubmit={handleSubmit}
                id={params.id}
            />
        </div>
    );
}

export default UpdateFeedback;
