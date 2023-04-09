import React from 'react'
import styles from '@/shared/components/shared/textbox/textbox.module.scss';

interface TextBoxProps extends React.ComponentPropsWithRef<'textarea'> {
    label?: string;
    description?: string
}

function TextBox(props: TextBoxProps) {
    const {label, description, ...rest} = props;
    return (
        <React.Fragment>
            {label && <label className={styles.label}>{label}</label>}
            {description && <span className={styles.description}>{description}</span>}
            <textarea {...rest} className={styles.textbox} />
        </React.Fragment>
    )
}

export default TextBox