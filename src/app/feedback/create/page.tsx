"use client"
import React from 'react'
import FeedbackForm from '@/shared/pages/feedback-form/feedback-form'
import styles from '@/app/feedback/create/create-feedback.module.scss';
import { Jost } from 'next/font/google';
import { addFeedback } from '@/shared/utils/firebase/feedback';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/shared/store';
import { fetchFeedbacksThunk } from '@/shared/store/feedbackSlice';

const jost = Jost({
  subsets: ['latin']
})

function CreateFeedback() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (payload: { title: string, category: string, details: string }) => {
    try {
      const response = await addFeedback(payload);
      if (response) {
        await dispatch(fetchFeedbacksThunk())
        router.back()
      }
    } catch (error) {
      console.log({ error })
    }
  }
  return (
    <div className={`${jost.className} ${styles.container}`}>
      <FeedbackForm type='create' handleSubmit={handleSubmit} />
    </div>
  )
}

export default CreateFeedback