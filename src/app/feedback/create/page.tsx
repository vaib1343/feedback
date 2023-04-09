import React from 'react'
import FeedbackForm from '@/shared/pages/feedback-form/feedback-form'
import styles from '@/app/feedback/create/create-feedback.module.scss';
import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin']
})

function CreateFeedback() {
  return (
    <div className={`${jost.className} ${styles.container}`}>
      <FeedbackForm />
    </div>
  )
}

export default CreateFeedback