import React, { useState } from 'react'
import styles from 'app/shared/components/common/Header/header.module.scss';
import Button from '../../shared/button/button';
import Dropdown from '../../shared/dropdown/dropdown';

const options = [
    {
        id: 0,
        label: 'Most Upvotes',
        value: 'most_upvotes',
    },
    {
        id: 1,
        label: 'Least Upvotes',
        value: 'least_upvotes',
    },
    {
        id: 2,
        label: 'Most Comments',
        value: 'most_comments',
    },
    {
        id: 3,
        label: 'Least Comments',
        value: 'least_comments',
    }
]

function Header() {
    const [sortBy, setSortBy] = useState<{
        id: string | number,
        label: string,
        value: string
    }>(options[0]);

    return (
        <div className={styles.container}>
            <Dropdown options={options} label={<span>Sort By: <span className={styles.label}>{sortBy.label}</span></span>} value={sortBy} onChange={(e) => setSortBy(e)} />
            <Button>+ Add Feedback</Button>
        </div>
    )
}

export default Header