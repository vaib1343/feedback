"use client"
import React from 'react'
import { Jost } from 'next/font/google'
import FeedbackForm from '@/shared/pages/feedback-form/feedback-form';
import styles from '@/app/feedback/update/[id]/update-feedback.module.scss';
const jost = Jost({
  subsets: ['latin']
})

function UpdateFeedback(props: { params: { id: string } }) {
  const { params } = props;
  return (
    <div className={`${jost.className} ${styles.container}`}><FeedbackForm type='update' /></div>
  )
}

export default UpdateFeedback