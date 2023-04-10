"use client"
import { CATEGORY_OPTIONS } from '@/shared/config/constant'
import { getFeedbacks } from '@/shared/utils/firebase/feedback'
import React, { useEffect, useState } from 'react'
import { FaComment } from 'react-icons/fa'
import Card from 'src/shared/components/shared/card/card'
import Tag from 'src/shared/components/shared/tag/tag'
import styles from 'src/shared/pages/home/main-section/main-section.module.scss';

function MainSection() {
  const [feedbacks, setFeedbacks] = useState<any[]>();
  const fetchFeedback = async () => {
    const feedbacks = await getFeedbacks();
    setFeedbacks(feedbacks);
  }
  useEffect(() => {
    fetchFeedback();
  }, [])
  return (
    <div className={styles.mainContainer}>
      {
        feedbacks?.map(feedback => (
          <Card className={styles.card} key={feedback.id}>
            <Card.Body className={styles.body}>
              <h4 className={styles.heading}>{feedback.title}</h4>
              <p className={styles.description}>{feedback.details}</p>
              <Tag>{feedback.category}</Tag>
            </Card.Body>
            <Tag className={styles.tag}>{feedback.vote}</Tag>
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