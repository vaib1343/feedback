import React from 'react'
import styles from '@/shared/components/shared/select/select.module.scss';
import { TiTick } from 'react-icons/ti';

interface SelectProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  label?: string;
  description?: string;
  options?: { id: string | number, label: string, value: string }[],
  onChange: (e: string) => void
}

function Select(props: SelectProps) {
  const { label, description, options, onChange, ...rest } = props;

  return (
    <div style={{position: 'relative'}}>
      {label && <label className={styles.label}>{label}</label>}
      {description && <span className={styles.description}>{description}</span>}
      <input className={styles.input} {...rest} />
      <ul className={styles.option} >
        {
          options?.map((el) => <li key={el.id} onClick={() => onChange(el.value)}>{el.label} {el.value === props.value && <span className={styles.tick}><TiTick /></span>}</li>)
        }
      </ul>
    </div>
  )
}

export default Select