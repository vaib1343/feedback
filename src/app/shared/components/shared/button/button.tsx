import React from 'react'
import styles from 'app/shared/components/shared/button/button.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {

}

function Button(props: ButtonProps) {
    const { className, children, ...rest } = props
    return (
        <button className={`${styles.button} ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button