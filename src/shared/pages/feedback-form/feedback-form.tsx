"use client"
import React, { useState } from 'react'
import styles from '@/shared/pages/feedback-form/feedback.module.scss';
import Input from '@/shared/components/shared/input/input';
import TextBox from '@/shared/components/shared/textbox/textbox';
import Select from '@/shared/components/shared/select/select';
import Button from '@/shared/components/shared/button/button';
import { MdAdd } from 'react-icons/md';

const CATEGORY_OPTIONS = [
    {
        id: 0,
        label: 'Feature',
        value: 'feature',
    },
    {
        id: 1,
        label: 'UI',
        value: 'ui',
    },
    {
        id: 2,
        label: 'UX',
        value: 'ux',
    },
    {
        id: 3,
        label: 'Enhancement',
        value: 'enhancement',
    },
    {
        id: 4,
        label: 'Bug',
        value: 'bug',
    }
]

const STATUS_OPTIONS = [
    {
        id: 0,
        label: 'Suggestion',
        value: 'suggestion',
    },
    {
        id: 1,
        label: 'In-Progress',
        value: 'inprogress',
    },
    {
        id: 2,
        label: 'Planned',
        value: 'planned',
    },
    {
        id: 3,
        label: 'Live',
        value: 'live',
    },
]

interface FormFieldTypes {
    category: string,
    updateStatus?: string,
    title: string,
    details: string,
}

function FeedbackForm() {
    const [formState, setFormState] = useState<FormFieldTypes>({
        category: 'enhancement',
        updateStatus: '',
        title: '',
        details: '',
    });

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

    return (
        <div className={styles.formContainer}>
            <div className={styles.formIcon}><MdAdd /></div>
            <h4 className={styles.heading}>Create New Feedback</h4>
            <form>
                <div className={styles.formField}>
                    <Input value={formState.title} onChange={handleChange} label='Feedback Title' name='title' description='Add a short, descriptive headline' />
                </div>
                <div className={styles.formField}>
                    <Select defaultValue={formState.category} onChange={(e) => handleSelect(e, 'category')} label='Category' name='category' description='Choose a category for your feedback' options={CATEGORY_OPTIONS} />
                </div>
                <div className={styles.formField}>
                    <Select defaultValue={formState.updateStatus} onChange={(e) => handleSelect(e, 'updateStatus')} label='Update Status' name='updateStatus' description='Change feature state' options={STATUS_OPTIONS} />
                </div>
                <div className={styles.formField}>
                    <TextBox value={formState.details} onChange={handleChange} style={{ height: '10rem' }} label='Feedback Detail' name='details' description='Include any specific comments on what should be improved, added, etc.' />
                </div>
                <div className={styles.buttonContainer}>
                    <Button className={styles.feedbackBtn}>Add Feedback</Button>
                    <Button className={styles.cancelBtn} variant='dark'>Cancel</Button>
                    <Button className={styles.deleteBtn} variant='danger'>Delete</Button>
                </div>
            </form>
        </div>
    )
}

export default FeedbackForm