'use client'
import React, { useEffect, useState, createContext } from 'react';
import { onAuthSubscriber } from '@/shared/utils/firebase/auth';
import { User } from 'firebase/auth';

export const UserContext = createContext<{ user: User, setUser: React.Dispatch<React.SetStateAction<User>> }>({
    user: {} as User,
    setUser: () => { }
});

interface UserProviderProps {
    children: React.ReactNode,
}

export default function UserProvider(props: UserProviderProps) {
    const [user, setUser] = useState({} as User);

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
    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>

}