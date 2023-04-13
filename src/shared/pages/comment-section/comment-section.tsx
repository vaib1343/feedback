import Button from '@/shared/components/shared/button/button';
import Container from '@/shared/components/shared/container/container'
import TextBox from '@/shared/components/shared/textbox/textbox';
import React, { useContext, useState } from 'react';
import styles from '@/shared/pages/comment-section/comment-section.module.scss';
import { UserContext } from '@/shared/context/user-context';
import { updateFeedback } from '@/shared/utils/firebase/feedback';
import { Feedback } from '@/shared/types/feedback.types';


interface CommentSectionProps {
  feedback: Feedback
}

function CommentSection(props: CommentSectionProps) {
  const { feedback } = props;
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if(comment) {
      const payload: Feedback = {
        ...feedback,
      }
      payload.comments = [...feedback.comments, {userName: `${user.displayName}`, comment}]
      updateFeedback(payload).then((res) => {
      })
    }
  }

  return (
    <div>
      <Container style={{ marginTop: '2.4rem' }}>
        <h1 className={styles.commentHeading} style={{fontSize: '1.8rem'}}>{feedback?.comments?.length} Comments</h1>
        {
          feedback?.comments?.map(({ userName, comment }, index) => <div key={`${index}-${userName}`} className={styles.commentContainer}>
            <h1 className={styles.commentHeading}>{userName}</h1>
            <p className={styles.comment}>{comment}</p>
          </div>)
        }
      </Container>
      <Container style={{ marginTop: '2.4rem' }}>
        <h1 className={styles.commentHeading}>Add Comment</h1>
        <TextBox placeholder='Comment your opinion' value={comment} onChange={(e) => setComment(e.target.value)} />
        <div style={{ textAlign: 'end', marginTop: '2.4rem' }}>
          <Button onClick={handleSubmit}>Post Comment</Button>
        </div>
      </Container>
    </div>
  )
}

export default CommentSection