import React from 'react';
import { Jost } from 'next/font/google'
import SignForm from '@/shared/pages/signupform/signform';
const jost = Jost({
  subsets: ['latin']
})


function SignUp() {
  return (
    <div className={`${jost.className}`}>
      <SignForm />
    </div>
  )
}

export default SignUp