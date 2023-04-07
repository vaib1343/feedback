import React from 'react'
import { FaComment } from 'react-icons/fa'
import Card from 'app/shared/components/shared/card/card'
import Tag from 'app/shared/components/shared/tag/tag'
import styles from 'app/shared/pages/home/main-section/main-section.module.scss';


function MainSection() {
  return (
    <div className={styles.mainContainer}>
      <Card className={styles.card}>
        <Card.Body className={styles.body}>
          <h4 className={styles.heading}>Add tags for solutions</h4>
          <p className={styles.description}>Easier to search for solutions based on a specific stack.</p>
          <Tag>Enhancement</Tag>
        </Card.Body>
        <Tag className={styles.tag}>112</Tag>
        <div className={styles.comment}>
          <FaComment color='#CDD2EE' size='2rem' />
          <span>2</span>
        </div>
      </Card>
      <Card >
        <Card.Body className={styles.card}>
          <div className={styles.body}>
            <h4 className={styles.heading}>Add tags for solutions</h4>
            <p className={styles.description}>Easier to search for solutions based on a specific stack.</p>
            <Tag>Enhancement</Tag>
          </div>
          <Tag className={styles.tag}>112</Tag>
          <div className={styles.comment}>
            <FaComment color='#CDD2EE' size='2rem' />
            <span>2</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MainSection