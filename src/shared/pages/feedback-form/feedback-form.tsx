"use client";
import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { BsPenFill } from "react-icons/bs";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/shared/pages/feedback-form/feedback.module.scss";
import Input from "@/shared/components/shared/input/input";
import TextBox from "@/shared/components/shared/textbox/textbox";
import Select from "@/shared/components/shared/select/select";
import Button from "@/shared/components/shared/button/button";
import GoBack from "@/shared/components/common/go-back/go-back";
import { CATEGORY_OPTIONS, STATUS_OPTIONS } from "@/shared/config/constant";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import {
    deleteFeedbackThunk,
    fetchFeedbackThunk,
    fetchFeedbacksThunk,
} from "@/shared/store/feedbackSlice";

interface FormFieldTypes {
    category: string;
    updateStatus?: string;
    title: string;
    details: string;
}

interface FieldErrorTypes {
    category: string[];
    updateStatus?: string[];
    title: string[];
    details: string[];
}

interface FeedbackFormProps {
    id?: string;
    type: "update" | "create";
    handleSubmit: (payload: any) => void;
}

function FeedbackForm(props: FeedbackFormProps) {
    const { type } = props;
    const [error, setError] = useState<FieldErrorTypes>();
    const { user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const { feedback } = useAppSelector((state) => state.feedback);
    const [formState, setFormState] = useState<FormFieldTypes>({
        category: "enhancement",
        updateStatus: "",
        title: "",
        details: "",
    });
    const router = useRouter();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value, name } = e.target;
        const newState = { ...formState };
        newState[name as keyof FormFieldTypes] = value;
        setFormState(newState);
    };

    const handleSelect = (value: string, id: string) => {
        const newState = { ...formState };
        newState[id as keyof FormFieldTypes] = value;
        setFormState(newState);
    };

    const checkField = (payload: {}) => {
        const error: FieldErrorTypes = {} as FieldErrorTypes;
        for (let key in payload) {
            if (!payload[key as keyof typeof payload]) {
                error[key as keyof FieldErrorTypes] = [`Can't be empty`];
            }
        }
        setError(error);
        return Object.keys(error).some((el) => el !== "");
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const { title, details, category, updateStatus } = formState;
            let payload: any = {
                title,
                details,
                category,
                userId: user?.uid,
            };
            if (props.type === "update") {
                payload.updateStatus = updateStatus;
            }
            if (checkField(payload)) {
                return;
            }
            if (props.type === "update") {
                payload.comments = feedback.comments;
                payload.vote = feedback.vote;
                payload.id = feedback.id;
            }
            props.handleSubmit(payload);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.back();
    };

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (props.id) {
            await dispatch(deleteFeedbackThunk(props.id));
            await dispatch(fetchFeedbacksThunk());
            router.push("/feedbacks");
        }
    };

    useEffect(() => {
        if (
            props.type === "update" &&
            props.id &&
            !Object.keys(feedback).length
        ) {
            dispatch(fetchFeedbackThunk(props.id));
        }
    }, [props.type, props.id, dispatch, feedback]);

    useEffect(() => {
        if (props.type === "update") {
            setFormState({
                category: feedback.category,
                title: feedback.title,
                updateStatus: feedback.updateStatus,
                details: feedback.details,
            });
        }
    }, [feedback, props.type]);

    return (
        <React.Fragment>
            <div style={{ marginBottom: "5rem" }}>
                <GoBack />
            </div>
            <div className={styles.formContainer}>
                <div className={styles.formIcon}>
                    {type === "create" ? (
                        <MdAdd />
                    ) : (
                        <BsPenFill fontSize="2rem" />
                    )}
                </div>
                <h4 className={styles.heading}>
                    {" "}
                    {type === "create"
                        ? "Create New Feedback"
                        : "Update Feedback"}
                </h4>
                <form>
                    <div className={styles.formField}>
                        <Input
                            placeholder="Enter value"
                            error={error?.title}
                            value={formState.title}
                            onChange={handleChange}
                            label="Feedback Title"
                            name="title"
                            description="Add a short, descriptive headline"
                        />
                    </div>
                    <div className={styles.formField}>
                        <Select
                            placeholder="Enter value"
                            value={formState.category}
                            onChange={(e) => handleSelect(e, "category")}
                            label="Category"
                            name="category"
                            description="Choose a category for your feedback"
                            options={CATEGORY_OPTIONS}
                        />
                    </div>
                    {type === "update" && user.role === "admin" && (
                        <div className={styles.formField}>
                            <Select
                                placeholder="Enter value"
                                error={error?.updateStatus}
                                defaultValue={formState.updateStatus}
                                onChange={(e) =>
                                    handleSelect(e, "updateStatus")
                                }
                                label="Update Status"
                                name="updateStatus"
                                description="Change feature state"
                                options={STATUS_OPTIONS}
                            />
                        </div>
                    )}
                    <div className={styles.formField}>
                        <TextBox
                            placeholder="Enter value"
                            error={error?.details}
                            value={formState.details}
                            onChange={handleChange}
                            style={{ height: "10rem" }}
                            label="Feedback Detail"
                            name="details"
                            description="Include any specific comments on what should be improved, added, etc."
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            className={styles.feedbackBtn}
                            onClick={handleSubmit}
                        >
                            {type === "update" ? "Update" : "Create"}
                        </Button>
                        <Button
                            className={styles.cancelBtn}
                            variant="dark"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        {type === "update" && (
                            <Button
                                className={styles.deleteBtn}
                                variant="danger"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default FeedbackForm;
