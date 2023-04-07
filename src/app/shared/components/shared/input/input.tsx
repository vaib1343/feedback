import React from 'react'
import styles from 'app/shared/components/shared/input/input.module.scss';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
    label?: string;
    description?: string
}

function Input(props: InputProps) {
    const {label, description} = props;
    return (
        <React.Fragment>
            {label && <label className={styles.label}>{label}</label>}
            {description && <span className={styles.description}>{description}</span>}
            <input className={styles.input}/>
        </React.Fragment>
    )
}

export default Input