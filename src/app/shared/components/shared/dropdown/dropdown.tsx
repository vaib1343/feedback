import React, { useState } from 'react'
import styles from 'app/shared/components/shared/dropdown/dropdown.module.scss';
import { TiTick } from 'react-icons/ti';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface DropdownProps {
    label: React.ReactNode,
    value: { id: number | string, label: string, value: string },
    onChange: (value: { id: string | number, value: string, label: string }) => void
    options: { id: number | string, label: string, value: string }[]
}

function Dropdown(props: DropdownProps) {
    const { label, options, value } = props;

    const onChange = (value: { id: string | number, value: string, label: string }) => {
        props.onChange(value)
    }

    return (
        <div className={styles.dropdownContainer}>
            <label ><span>{label}</span>  <MdKeyboardArrowUp /> </label>
            <ul className={styles.dropdown}>
                {
                    options.map((option) => <li key={option.id} onClick={() => onChange(option)}>
                        <span>{option.label}</span> {option.value === value.value && <span className={styles.tick}><TiTick /></span>}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Dropdown;