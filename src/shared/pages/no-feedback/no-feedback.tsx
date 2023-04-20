import React from 'react';
import styles from '@/shared/pages/no-feedback/no-feedback.module.scss';
import Image from 'next/image';
import Button from '@/shared/components/shared/button/button';
import Link from 'next/link';

function NoFeedback() {
  return (
    <div className={`${styles.container}`}>
      <Image src='/nofeedback.svg' alt='not found image' width={100} height={100} />
      <h5>There is no feedback yet.</h5>
      <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
      <Link href='/feedback/create'>
        <Button>+ Add Feedback</Button>
      </Link>
    </div>
  )
}

export default NoFeedback