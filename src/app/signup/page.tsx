"use client"
import React from 'react';
import { Jost } from 'next/font/google'
import SignForm from '@/shared/pages/signup-form/signup-form';
import styles from '@/app/signup/signup.module.scss';

const jost = Jost({
  subsets: ['latin']
})


function SignUp() {
  return (
    <div className={`${jost.className} ${styles.container}`}>
      <SignForm />
    </div>
  )
}

export default SignUp