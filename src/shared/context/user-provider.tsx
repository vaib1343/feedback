'use client'
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { authSubscribe, errorState, loadingState } from '../store/authSlice';
import { onAuthSubscriber } from '../utils/firebase/auth';


interface UserProviderProps {
    children: React.ReactNode,
}

export default function UserProvider(props: UserProviderProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadingState())
        const unsubcribe = onAuthSubscriber((user) => {
            if (user) {
                dispatch(authSubscribe(user))
            } else {
                dispatch(errorState())
            }
        })
        return unsubcribe
    }, [dispatch])

    const { children } = props;
    return <React.Fragment>
        {children}
    </React.Fragment>

}