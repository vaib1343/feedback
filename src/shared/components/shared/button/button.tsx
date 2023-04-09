import React from 'react'
import styles from 'src/shared/components/shared/button/button.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    variant?: 'danger' | 'default' | 'dark';
}

function Button(props: ButtonProps) {
    const { className, children, variant, ...rest } = props
    return (
        <button className={`${styles.button} ${className} ${styles[variant || 'default']}`} {...rest}>
            {children}
        </button>
    )
}

export default Button