"use client"
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/user-context';
import { useRouter } from 'next/navigation';

function PublicRoutes<T>(WrappedComponent: React.ComponentType<T>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const Component = (props: Omit<T, ''>) => {
    const router = useRouter();
    const { user } = useContext(UserContext);

    useEffect(() => {
      if (user && Object.keys(user).length) {
        router.push('/')
      }
    }, [user, router]);
    if (!(user && Object.keys(user).length)) {
      return <WrappedComponent {...props} {...(props as T)} />;
    }
    return null

  };

  Component.displayName = `Public(${displayName})`;

  return Component;
}

export default PublicRoutes