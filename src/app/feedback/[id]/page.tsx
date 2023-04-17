"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/app/feedback/[id]/feedback.module.scss';
import GoBack from '@/shared/components/common/go-back/go-back';
import Button from '@/shared/components/shared/button/button';
import Card from '@/shared/components/shared/card/card';
import { Jost } from 'next/font/google'
import { FaComment } from 'react-icons/fa';
import Tag from '@/shared/components/shared/tag/tag';
import CommentSection from '@/shared/pages/comment-section/comment-section';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { fetchFeedbackThunk } from '@/shared/store/feedbackSlice';
import Link from 'next/link';

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
    const dispatch = useAppDispatch();
    const { feedback } = useAppSelector(state => state.feedback)

    useEffect(() => {
        if (params.id) {
            dispatch(fetchFeedbackThunk(params.id))
        }
    }, [params.id, dispatch])


    return <div className={`${jost.className} ${styles.mainContainer}`}>
        <div className={styles.container}>
            <GoBack />
            <Link href={`/feedback/update/${params.id}`}>
                <Button>Edit Feedback</Button>
            </Link>
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
                <span>{feedback?.comments?.length}</span>
            </div>
        </Card>
        <CommentSection feedback={feedback} params={params} />
    </div>
}

export default Feedback