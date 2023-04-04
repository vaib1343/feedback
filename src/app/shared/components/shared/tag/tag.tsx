import React from 'react'
import styles from 'app/shared/components/shared/tag/tag.module.scss';

interface TagProps extends React.ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode,
    selected?: boolean
}

function Tag(props: TagProps) {
    const { children, selected, ...rest } = props;
    return (
        <div data-selected={selected} className={styles.container} {...rest}>{children}</div>
    )
}

export default Tag