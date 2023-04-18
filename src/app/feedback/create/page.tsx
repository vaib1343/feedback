"use client"
import React from 'react'
import FeedbackForm from '@/shared/pages/feedback-form/feedback-form'
import styles from '@/app/feedback/create/create-feedback.module.scss';
import { Jost } from 'next/font/google';
import { addFeedback } from '@/shared/utils/firebase/feedback';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { fetchFeedbacksThunk } from '@/shared/store/feedbackSlice';

const jost = Jost({
  subsets: ['latin']
})

function CreateFeedback() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, status } = useAppSelector(state => state.auth)

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

  if (status === 'loading') {
    return <p>loading</p>
  }

  if (status === 'idle' && !Object.keys(user).length) {
    router.push('/login')
    return null
  }

  return (
    <div className={`${jost.className} ${styles.container}`}>
      <FeedbackForm type='create' handleSubmit={handleSubmit} />
    </div>
  )
}

export default CreateFeedback