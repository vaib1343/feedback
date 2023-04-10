"use client"
import React, { useState } from 'react';
import styles from '@/shared/pages/signup-form/signup-form.module.scss';
import Input from '@/shared/components/shared/input/input';
import Button from '@/shared/components/shared/button/button';
import { firebaseSignUp } from '@/shared/utils/firebase/auth';
import { useRouter } from 'next/navigation';

interface userState {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

function SignUpForm() {
    const [userDetails, setUserDetails] = useState<userState>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setUserDetails((preState => ({
            ...preState,
            [name]: value,
        })))
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const userInfo = await firebaseSignUp(userDetails);
        router.push('/feedbacks')
    }

    return (
        <form className={styles.container}>
            <h4 className={styles.heading}>Sign Up</h4>
            <div className={styles.field}>
                <Input label='First Name' value={userDetails?.firstName} onChange={handleChange} placeholder='enter first name' type='text' name='firstName' />
            </div>
            <div className={styles.field}>
                <Input label='Last Name' value={userDetails?.lastName} onChange={handleChange} placeholder='enter last name' type='text' name='lastName' />
            </div>
            <div className={styles.field}>
                <Input label='Email' value={userDetails?.email} onChange={handleChange} placeholder='xyz@gmail.com' type='email' name='email' />
            </div>
            <div className={styles.field}>
                <Input label='Confirm Password' value={userDetails?.confirmPassword} onChange={handleChange} placeholder='*****' type='password' name='confirmPassword' />
            </div>
            <div className={styles.field}>
                <Input label='Password' value={userDetails?.password} onChange={handleChange} placeholder='*****' type='password' name='password' />
            </div>
            <div className={styles.btnContainer}>
                <Button onClick={handleSubmit}>
                    SignUp
                </Button>
            </div>
        </form>
    )
}

export default SignUpForm