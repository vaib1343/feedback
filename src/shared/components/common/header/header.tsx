import React, { useState } from 'react'
import Button from 'src/shared/components/shared/button/button';
import Dropdown from 'src/shared/components/shared/dropdown/dropdown';
import styles from 'src/shared/components/common/header/header.module.scss'
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