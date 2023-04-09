import React from 'react'
import styles from '@/shared/pages/loginform/loginform.module.scss';
import Input from '@/shared/components/shared/input/input';
import Button from '@/shared/components/shared/button/button';

function LoginForm() {
    return (
        <div className={styles.container}>
            <h4 className={styles.heading}>Login</h4>
            <div className={styles.field}>
                <Input label='Email' placeholder='xyz@gmail.com' type='email' />
            </div>
            <div className={styles.field}>
                <Input label='Password' placeholder='*****' type='password' />
            </div>
            <div className={styles.btnContainer}>
                <Button>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default LoginForm