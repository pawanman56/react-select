
import { useEffect, useState } from 'react';
import styles from './select.module.css';

type SelectOption = {
  label: string
  value: string | number
}

type SelectProps = {
  options: SelectOption[]
  value?: SelectOption
  onChange: (value: SelectOption | undefined) => void
}

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptions() {
    onChange(undefined)
  }
  
  function selectOption(option: SelectOption) {
    if (value !== value) onChange(option)
  }

  function isOptionSelected(option: SelectOption) {
    return option === value
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])

  return (
    <div
      tabIndex={0}
      className={styles.container}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prev => !prev)}>
      <div className={styles.value}>{value?.label}</div>
      <button
        onClick={e => {
          e.stopPropagation()
          clearOptions()
        }}
        className={styles['clear-btn']}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {options.map((option, index)=> (
          <li
            onClick={e => {
              e.stopPropagation()
              selectOption(option)
              setIsOpen(false)
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`
              ${styles.option}
              ${isOptionSelected(option) ? styles.selected : ''}
              ${(highlightedIndex === index) ? styles.highlighted : ''}
            `}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}