'use client'
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { authSubscribe, errorState, loadingState } from '../store/authSlice';
import { getUserDetails, onAuthSubscriber } from '../utils/firebase/auth';


interface UserProviderProps {
    children: React.ReactNode,
}

export default function UserProvider(props: UserProviderProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadingState())
        const unsubcribe = onAuthSubscriber(async (user) => {
            if (user) {
                const response = await getUserDetails(user?.uid)
                dispatch(authSubscribe({ ...user, ...response}))
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