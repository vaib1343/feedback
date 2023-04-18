"use client"
import React from 'react'
import LoginForm from '@/shared/pages/login-form/login-form';
import styles from '@/app/login/login.module.scss';
import { Jost } from 'next/font/google'
import { useAppSelector } from '@/shared/store';
import { useRouter } from 'next/navigation';
const jost = Jost({
  subsets: ['latin']
})


function Login() {
  const { user, status } = useAppSelector(state => state.auth)
  const router = useRouter();

  if (status === 'loading') {
    return <p>loading</p>
  }

  if (status === 'idle' && Object.keys(user).length) {
    router.push('/feedbacks')
    return null
  }
  
  return (
    <div className={`${jost.className} ${styles.container}`}>
      <LoginForm />
    </div>
  )
}

export default Login