import React from 'react'
import styles from 'src/shared/components/shared/container/container.module.scss';

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode;
}

function Container(props: ContainerProps) {
    const { children, ...rest } = props
    return (
        <div className={`${styles.container} ${props.className}`} {...rest}>{children}</div>
    )
}

export default Container