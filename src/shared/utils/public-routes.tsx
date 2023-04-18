"use client"
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../store';

function PublicRoutes<T>(WrappedComponent: React.ComponentType<T>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const Component = (props: Omit<T, ''>) => {
    const router = useRouter();
    const { user } = useAppSelector(state => state.auth)

    if (Object.keys(user).length) {
      router.push('/')
      return null
    }

    if (!Object.keys(user).length) {
      return <WrappedComponent {...props} {...(props as T)} />;
    }

  };

  Component.displayName = `Public(${displayName})`;

  return Component;
}

export default PublicRoutes