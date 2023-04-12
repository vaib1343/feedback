"use client"
import React, { useEffect, useState } from 'react';
import styles from '@/app/feedback/[id]/feedback.module.scss';
import GoBack from '@/shared/components/common/go-back/go-back';
import Button from '@/shared/components/shared/button/button';
import Card from '@/shared/components/shared/card/card';
import { Jost } from 'next/font/google'
import { FaComment } from 'react-icons/fa';
import { getFeedback } from '@/shared/utils/firebase/feedback';
import { Feedback } from '@/shared/types/feedback.types';
import Tag from '@/shared/components/shared/tag/tag';
import CommentSection from '@/shared/pages/comment-section/comment-section';
import Container from '@/shared/components/shared/container/container';
const jost = Jost({
    subsets: ['latin']
})

interface FeedbackProps {
    params: {
        id: string
    }
}

function Feedback(props: FeedbackProps) {
    const { params } = props;
    const [feedback, setFeedback] = useState<Feedback & { vote: number; comments: Array<string>; id: string }>();
    const fetchFeedback = async (id: string) => {
        const response = await getFeedback(id);
        setFeedback(response as Feedback & { vote: number; comments: Array<string>; id: string })
    }
    useEffect(() => {
        fetchFeedback(params?.id)
    }, [params.id])
    return <div className={`${jost.className} ${styles.mainContainer}`}>
        <div className={styles.container}>
            <GoBack />
            <Button>Edit Feedback</Button>
        </div>
        <Card className={styles.card}>
            <Card.Body className={styles.body}>
                <h4 className={styles.heading}>{feedback?.title}</h4>
                <p className={styles.description}>{feedback?.details}</p>
                <Tag>{feedback?.category}</Tag>
            </Card.Body>
            <Tag className={styles.tag}>{feedback?.vote}</Tag>
            <div className={styles.comment}>
                <FaComment color='#CDD2EE' size='2rem' />
                <span>{feedback?.comments.length}</span>
            </div>
        </Card>
        <Container style={{ marginTop: '2.4rem' }}>
            <CommentSection />
        </Container>
    </div>
}

export default Feedback