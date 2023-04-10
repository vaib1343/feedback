"use client"
import React, { useState } from 'react'
import styles from '@/shared/pages/feedback-form/feedback.module.scss';
import Input from '@/shared/components/shared/input/input';
import TextBox from '@/shared/components/shared/textbox/textbox';
import Select from '@/shared/components/shared/select/select';
import Button from '@/shared/components/shared/button/button';
import { MdAdd } from 'react-icons/md';
import { CATEGORY_OPTIONS, STATUS_OPTIONS } from '@/shared/config/constant';
import GoBack from '@/shared/components/common/go-back/go-back';
import { useRouter } from 'next/navigation';
import { addFeedback } from '@/shared/utils/firebase/feedback';

interface FormFieldTypes {
    category: string,
    updateStatus?: string,
    title: string,
    details: string,
}

interface FieldErrorTypes {
    category: string[],
    updateStatus?: string[],
    title: string[],
    details: string[],
}

interface FeedbackFormProps {
    type: 'update' | 'create';
}

function FeedbackForm(props: FeedbackFormProps) {
    const { type } = props;
    const [error, setError] = useState<FieldErrorTypes>();
    const [formState, setFormState] = useState<FormFieldTypes>({
        category: 'enhancement',
        updateStatus: '',
        title: '',
        details: '',
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        const newState = { ...formState };
        newState[name as keyof FormFieldTypes] = value;
        setFormState(newState);
    }

    const handleSelect = (value: string, id: string) => {
        const newState = { ...formState };
        newState[id as keyof FormFieldTypes] = value
        setFormState(newState);
    }

    const checkField = (payload: {}) => {
        const error: FieldErrorTypes = {} as FieldErrorTypes;
        for (let key in payload) {
            if (!payload[key as keyof typeof payload]) {
                error[key as keyof FieldErrorTypes] = [`Can't be empty`]
            }
        }
        setError(error)
        return Object.keys(error).some(el => el !== '');
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const { title, details, category } = formState;
            const payload = {
                title,
                details,
                category
            }
            if (checkField(payload)) {
                return
            }
            const response = await addFeedback(payload);
            if (response) {
                setFormState({
                    category: 'enhancement',
                    updateStatus: '',
                    title: '',
                    details: '',
                });
                router.back()
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.back()
    }

    return (
        <React.Fragment>
            <div style={{ marginBottom: '5rem' }}>
                <GoBack />
            </div>
            <div className={styles.formContainer}>
                <div className={styles.formIcon}><MdAdd /></div>
                <h4 className={styles.heading}>Create New Feedback</h4>
                <form>
                    <div className={styles.formField}>
                        <Input error={error?.title} value={formState.title} onChange={handleChange} label='Feedback Title' name='title' description='Add a short, descriptive headline' />
                    </div>
                    <div className={styles.formField}>
                        <Select defaultValue={formState.category} onChange={(e) => handleSelect(e, 'category')} label='Category' name='category' description='Choose a category for your feedback' options={CATEGORY_OPTIONS} />
                    </div>
                    {
                        type === 'update' &&
                        <div className={styles.formField}>
                            <Select error={error?.updateStatus} defaultValue={formState.updateStatus} onChange={(e) => handleSelect(e, 'updateStatus')} label='Update Status' name='updateStatus' description='Change feature state' options={STATUS_OPTIONS} />
                        </div>
                    }
                    <div className={styles.formField}>
                        <TextBox error={error?.details} value={formState.details} onChange={handleChange} style={{ height: '10rem' }} label='Feedback Detail' name='details' description='Include any specific comments on what should be improved, added, etc.' />
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button className={styles.feedbackBtn} onClick={handleSubmit}>Add Feedback</Button>
                        <Button className={styles.cancelBtn} variant='dark' onClick={handleCancel}>Cancel</Button>
                        {
                            type === 'update' &&
                            <Button className={styles.deleteBtn} variant='danger'>Delete</Button>
                        }
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default FeedbackForm