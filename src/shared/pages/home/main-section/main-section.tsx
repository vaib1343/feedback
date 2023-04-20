"use client"
import { useAppDispatch } from '@/shared/store'
import { fetchFeedbacksThunk, updateFeedbackThunk } from '@/shared/store/feedbackSlice'
import { Feedback } from '@/shared/types/feedback.types'
import Link from 'next/link'
import React from 'react'
import { FaComment } from 'react-icons/fa'
import Card from 'src/shared/components/shared/card/card'
import Tag from 'src/shared/components/shared/tag/tag'
import styles from 'src/shared/pages/home/main-section/main-section.module.scss';
import NoFeedback from '../../no-feedback/no-feedback'

interface MainSectionProps {
  feedbacks: Array<Feedback> | undefined
}

function MainSection(props: MainSectionProps) {
  const { feedbacks } = props;
  const dispatch = useAppDispatch();

  const handleVote = async (feedback: Feedback) => {
    try {
      const payload = {
        ...feedback,
        vote: feedback.vote + 1,
      }
      dispatch(updateFeedbackThunk(payload)).then(() => {
        dispatch(fetchFeedbacksThunk());
      })
    } catch (err) {
      console.log({ err })
    }
  }

  return (
    <div className={styles.mainContainer}>
      {
        !!feedbacks?.length ? feedbacks?.map(feedback => (
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
          : <NoFeedback />
      }
    </div>
  )
}

export default MainSection