import React from 'react'
import styles from '@/shared/components/shared/textbox/textbox.module.scss';

interface TextBoxProps extends React.ComponentPropsWithRef<'textarea'> {
    label?: string;
    description?: string;
    error?: string[]
}

function TextBox(props: TextBoxProps) {
    const { label, description, error, ...rest } = props;
    return (
        <React.Fragment>
            {label && <label className={styles.label}>{label}</label>}
            {description && <span className={styles.description}>{description}</span>}
            <textarea {...rest} className={styles.textbox} data-error={typeof error === 'object' && error && 'error'} />
            {
                error?.map(el =>
                    <div key={el} className={styles.error}>{error}</div>
                )
            }
        </React.Fragment>
    )
}

export default TextBox