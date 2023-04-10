import React from 'react'
import styles from '@/shared/components/shared/input/input.module.scss';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
    label?: string;
    description?: string,
    error?: string[],
}

function Input(props: InputProps) {
    const { label, description, error, ...rest } = props;
    return (
        <React.Fragment>
            {label && <label className={styles.label}>{label}</label>}
            {description && <span className={styles.description}>{description}</span>}
            <input className={styles.input} data-error={typeof error === 'object' && error && 'error'} {...rest} />
            {
                error?.map(el =>
                    <div key={el} className={styles.error}>{error}</div>
                )
            }
        </React.Fragment>
    )
}

export default Input