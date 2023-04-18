'use client'
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { authSubscribe } from '../store/authSlice';
import { onAuthSubscriber } from '../utils/firebase/auth';


interface UserProviderProps {
    children: React.ReactNode,
}

export default function UserProvider(props: UserProviderProps) {
    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const unsubcribe = onAuthSubscriber((user) => {
            if (user) {
                dispatch(authSubscribe(user))
            }
        })
        return unsubcribe
    }, [dispatch])

    const { children } = props;
    return <React.Fragment>
        {children}
    </React.Fragment>

}