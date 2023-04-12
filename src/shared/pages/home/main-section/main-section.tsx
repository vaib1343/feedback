"use client"
import { CATEGORY_OPTIONS } from '@/shared/config/constant'
import { Feedback } from '@/shared/types/feedback.types'
import { getFeedbacks, updateFeedback } from '@/shared/utils/firebase/feedback'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaComment } from 'react-icons/fa'
import Card from 'src/shared/components/shared/card/card'
import Tag from 'src/shared/components/shared/tag/tag'
import styles from 'src/shared/pages/home/main-section/main-section.module.scss';

interface MainSectionProps {
  feedbacks: Array<Feedback & { vote: number, comments: Array<string>, id: string }> | undefined
}

function MainSection(props: MainSectionProps) {
  const { feedbacks } = props;

  const handleVote = async (feedback: Feedback & { vote: number, comments: Array<string>, id: string }) => {
    try {
      const payload = {
        ...feedback,
        vote: feedback.vote + 1,
      }
      await updateFeedback(payload)
    } catch (err) {
      console.log({ err })
    }
  }

  return (
    <div className={styles.mainContainer}>
      {
        feedbacks?.map(feedback => (
          <Card className={styles.card} key={feedback.id}>
            <Card.Body className={styles.body}>
              <Link href={`/feedback/${feedback.id}`}>
                <h4 className={styles.heading}>{feedback.title}</h4>
              </Link>
              <p className={styles.description}>{feedback.details}</p>
              <Tag>{feedback.category}</Tag>
            </Card.Body>
            <Tag className={styles.tag} onClick={() => handleVote(feedback)}>{feedback.vote}</Tag>
            <div className={styles.comment}>
              <FaComment color='#CDD2EE' size='2rem' />
              <span>{feedback.comments.length}</span>
            </div>
          </Card>
        ))
      }
    </div>
  )
}

export default MainSection