"use client"
import React from 'react';
import styles from '@/shared/components/common/toast/toast.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'

interface ToastProps {
    children?: React.ReactNode,
}

function Toast() {
    return (
        <div className={`${styles.toastContainer} ${ false ? styles.close : styles.open}`}>
            <div>
                Login successfully
            </div>
            <div>
                <AiFillCloseCircle />
            </div>
        </div>
    )
}

export default Toast