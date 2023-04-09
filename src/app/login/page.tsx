"use client"
import React from 'react'
import LoginForm from '@/shared/pages/loginform/loginform';
import styles from '@/app/login/login.module.scss';
import { Jost } from 'next/font/google'
const jost = Jost({
  subsets: ['latin']
})


function Login() {
  return (
    <div className={`${jost.className} ${styles.container}`}>
      <LoginForm />
    </div>
  )
}

export default Login