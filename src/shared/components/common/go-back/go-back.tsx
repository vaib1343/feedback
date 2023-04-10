"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import styles from '@/shared/components/common/go-back/go-back.module.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md'
function GoBack() {
    const router = useRouter()
    return (
        <div className={styles.goBack} onClick={() => router.back()}>
            <span><MdKeyboardArrowLeft fontSize='1.5rem' fontWeight={700}/></span><p>Go Back</p>
        </div>
    )
}

export default GoBack