import React, { useState } from 'react'
import styles from 'app/shared/pages/feedback-form/feedback.module.scss';
import Input from 'app/shared/components/shared/input/input';
import TextBox from 'app/shared/components/shared/textbox/textbox';
import Select from 'app/shared/components/shared/select/select';

const OPTIONS = [
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

function FeedbackForm() {
    const [category, setCategory] = useState('enhancement')
    const [updateStatus, setUpdateStatus] = useState('');
    return (
        <div className={styles.formContainer}>
            <h4 className={styles.heading}>Create New Feedback</h4>
            <form>
                <div className={styles.formField}>
                    <Input label='Feedback Title' description='Add a short, descriptive headline' />
                </div>
                <div className={styles.formField}>
                    <Select value={category} onChange={(e) => setCategory(e)} label='Category' description='Choose a category for your feedback' options={OPTIONS} />
                </div>
                <div className={styles.formField}>
                    <Select value={category} onChange={(e) => setCategory(e)} label='Update Status' description='Change feature state' options={OPTIONS} />
                </div>
                <div className={styles.formField}>
                    <TextBox style={{ height: '10rem' }} label='Feedback Detail' description='Include any specific comments on what should be improved, added, etc.' />
                </div>
            </form>
        </div>
    )
}

export default FeedbackForm