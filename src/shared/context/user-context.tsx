'use client'
import React, { useEffect, useState, createContext } from 'react';
import { onAuthSubscriber } from '@/shared/utils/firebase/auth';

const UserContext = createContext({});

interface UserProviderProps {
    children: React.ReactNode,
}

export default function UserProvider(props: UserProviderProps) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthSubscriber((user) => {
            if (user) {
                setUser(user);
            }
            console.log({
                user,
            });
        });
        return unsubscribe;
    },)

    const { children } = props;
    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>

}